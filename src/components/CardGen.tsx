import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import html2canvas from "html2canvas";
import JSZip from 'jszip';
import CardFront from "./CardFront";
import { useUser } from "@/app/hooks/UserContext";
import { ref, set, child, update } from "firebase/database"; // Firebase imports
import { auth, app, database } from "@/app/firebase/config";


interface CardData {
    cardNumber: string | null;
    cardCVV: string | null;
    cardType: string | null;
    date: string; // Date in string format for Realtime Database
}

const CardGen = () => {
    const [cardBg, setCardBg] = useState<string>('from-orange to-yellow');
    const [selectedCardType, setSelectedCardType] = useState<string | null>(null);
    const [generatedCardNumber, setGeneratedCardNumber] = useState<string | null>(null);
    const [generatedCVV, setGeneratedCVV] = useState<string | null>(null);
    const [showGeneratedDetails, setShowGeneratedDetails] = useState(false);
    const [selectedCardTypeBeforeGenerate, setSelectedCardTypeBeforeGenerate] = useState<string | null>(null);

    const { user } = useUser()

    const handleSmallDivClick = (bgClass: string) => {
        setCardBg(bgClass);
    };

    const getRandomDigits = (length: number) => {
        return Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0');
    };

    const handleGenerateClick = async () => {
        if (!selectedCardType) {
            toast.error("Please select a card type");
            return;
        }

        const cardData: CardData = {
            cardNumber: null,
            cardCVV: null,
            cardType: selectedCardType,
            date: new Date().toLocaleDateString('en-US', {  // Use toLocaleDateString
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }),
        };

        if (selectedCardType === "Visa") {
            cardData.cardNumber = `4${getRandomDigits(15)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "Mastercard") {
            cardData.cardNumber = `5${getRandomDigits(15)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "Verve") {
            cardData.cardNumber = `6${getRandomDigits(15)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "American Express") {
            cardData.cardNumber = `34${getRandomDigits(13)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "Discover") {
            cardData.cardNumber = `6${getRandomDigits(15)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "JCB") {
            cardData.cardNumber = `35${getRandomDigits(14)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "RuPay") {
            cardData.cardNumber = `6${getRandomDigits(15)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "Maestro") {
            cardData.cardNumber = `5${getRandomDigits(15)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "Union Pay") {
            cardData.cardNumber = `62${getRandomDigits(17)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "Voyager") {
            cardData.cardNumber = `8699${getRandomDigits(11)}`;
            cardData.cardCVV = getRandomDigits(3);
        } else if (selectedCardType === "Diners Club") {
            cardData.cardNumber = `300${getRandomDigits(11)}`;
            cardData.cardCVV = getRandomDigits(3);
        }

        setGeneratedCardNumber(cardData.cardNumber);
        setGeneratedCVV(cardData.cardCVV);
        setSelectedCardTypeBeforeGenerate(selectedCardType);
        setShowGeneratedDetails(true);
        toast.success("Card generated successfully");

        // Update user's data in Realtime Database (if user is logged in)
        if (user) {
            const userRef = ref(database, `users/${user.uid}/generatedCards`);
            try {
                const newCardKey = `${Date.now()}`; // Use a unique key based on timestamp
                await update(userRef, {
                    [newCardKey]: cardData,
                });
            } catch (error) {
                console.error("Error adding card data to Realtime Database:", error);
                toast.error("Failed to save card details to database. Check console.");
            }
        }
    };

    const getCardImage = () => {
        const cardTypeToDisplay = selectedCardTypeBeforeGenerate || selectedCardType;

        if (cardTypeToDisplay === "Visa") {
            return "/img/visa.png";
        } else if (cardTypeToDisplay === "Mastercard") {
            return "/img/mastercard.png";
        } else if (cardTypeToDisplay === "Verve") {
            return "/img/verve.png";
        } else if (cardTypeToDisplay === "American Express") {
            return "/img/express.png";
        } else if (cardTypeToDisplay === "Maestro") {
            return "/img/maestro.png";
        } else if (cardTypeToDisplay === "Discover") {
            return "/img/discover.png";
        } else if (cardTypeToDisplay === "JCB") {
            return "/img/jcb.png";
        } else if (cardTypeToDisplay === "RuPay") {
            return "/img/rupay.png";
        } else if (cardTypeToDisplay === "Union Pay") {
            return "/img/unionpay.png";
        } else if (cardTypeToDisplay === "Voyager") {
            return "/img/voyager.png";
        } else if (cardTypeToDisplay === "Diners Club") {
            return "/img/diners.png";
        } else {
            return "/img/default-card.png";
        }
    };

    const handleDownloadClick = async () => {
        // Check if a card type is selected
        if (!selectedCardType) {
            toast.error("Please select a card type before generating or downloading");
            return;
        }

        // Check if a card has been generated
        if (!showGeneratedDetails) {
            toast.error("Please generate a card before downloading");
            return;
        }

        const cardData: CardData = {
            cardNumber: null,
            cardCVV: null,
            cardType: selectedCardType,
            date: new Date().toLocaleDateString('en-US', {  // Use toLocaleDateString
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }),
        };

        // Update user's data in Realtime Database (if user is logged in)
        if (user) {
            const userRef = ref(database, `users/${user.uid}/downloadedCards`);
            try {
                const newCardKey = `${Date.now()}`; // Use a unique key based on timestamp
                await update(userRef, {
                    [newCardKey]: {
                        cardNumber: generatedCardNumber, // Use existing state
                        cardCVV: generatedCVV, // Use existing state
                        cardType: selectedCardType,
                        date: new Date().toLocaleDateString('en-US', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        }),
                    },
                });
            } catch (error) {
                console.error("Error adding card data to Realtime Database:", error);
                toast.error("Failed to save card details to database. Please check console.");
            }
        }


        // Get references to the card front and back elements
        const cardFront = document.getElementById("card-front");
        const cardBack = document.getElementById("card-back");

        // Check if both elements exist
        if (cardFront && cardBack) {
            try {
                // Capture the content of the card front as an image
                const canvasFront = await html2canvas(cardFront);
                const imageFront = canvasFront.toDataURL("image/png");

                // Capture the content of the card back as an image
                const canvasBack = await html2canvas(cardBack);
                const imageBack = canvasBack.toDataURL("image/png");

                // Create a new JSZip instance for creating the archive
                const zip = new JSZip();

                // Add the front and back images to the zip archive
                zip.file("card_front.png", imageFront.split(',')[1], { base64: true });
                zip.file("card_back.png", imageBack.split(',')[1], { base64: true });

                // Generate the zip file content as a blob
                const content = await zip.generateAsync({ type: "blob" });
                const blob = new Blob([content], { type: "application/zip" });

                // Create a temporary URL for the downloaded file
                const url = window.URL.createObjectURL(blob);

                // Create a link element to trigger the download
                const link = document.createElement("a");
                link.href = url;
                link.download = "card_images.zip";
                link.click();

                // Revoke the temporary URL to avoid memory leaks
                window.URL.revokeObjectURL(url);

                // Show success message on download completion
                toast.success("Card images downloaded successfully!");

                // Reset card details
                setGeneratedCardNumber(null);
                setGeneratedCVV(null);
                setSelectedCardTypeBeforeGenerate(null);
                setShowGeneratedDetails(false);
            } catch (error) {
                console.error("Error downloading card images:", error);
                toast.error("Failed to download card images. Please try again.");
            }
        }

    };


    return (
        <main className="relative top-[60px] sm:top-[70px] px-[5%] py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <section className="text-[14px] md:text-[16px] bg-[#F8F8F8] p-3 sm:p-6 md:p-10 rounded-2xl grid gap-4">

                <CardFront cardBg={cardBg} generatedCardNumber={generatedCardNumber} showGeneratedDetails={showGeneratedDetails} getCardImage={getCardImage} user={user} />

                <p className="text-center leading-relaxed tracking-wide font-bold">Credit Card Front View</p>

                <div className="flex items-center justify-center gap-4">
                    <div
                        className={`bg-gradient-to-br from-orange to-yellow ${cardBg == 'from-orange to-yellow' ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"} rounded-lg cursor-pointer`}
                        onClick={() => handleSmallDivClick('from-orange to-yellow')}
                    ></div>
                    <div
                        className={`bg-gradient-to-br from-purple to-green ${cardBg == 'from-purple to-green' ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"} rounded-lg cursor-pointer`}
                        onClick={() => handleSmallDivClick('from-purple to-green')}
                    ></div>
                    <div
                        className={`bg-gradient-to-br from-purple to-orange ${cardBg == 'from-purple to-orange' ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"}  rounded-lg cursor-pointer`}
                        onClick={() => handleSmallDivClick('from-purple to-orange')}
                    ></div>
                    <div
                        className={`bg-gradient-to-br from-black to-red ${cardBg == 'from-black to-red' ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"}  rounded-lg cursor-pointer`}
                        onClick={() => handleSmallDivClick('from-black to-red')}
                    ></div>
                </div>

                <div id="card-back" className={`bg-gradient-to-br ${cardBg} py-4 sm:py-6 rounded-2xl min-h-[300px] text-white relative`}>
                    <div className="bg-black h-16 w-full mt-2"></div>

                    <div className="grid gap-2 px-4 sm:py-6">

                        <div className="flex items-center justify-between gap-2 bg-white p-2 mt-4 sm:mt-0">
                            <div className="w-full grid gap-[1px]">
                                <hr className="h-1 w-full bg-black" />
                                <hr className="h-1 w-full bg-black" />
                                <hr className="h-1 w-full bg-black" />
                                <hr className="h-1 w-full bg-black" />
                                <hr className="h-1 w-full bg-black" />
                                <hr className="h-1 w-full bg-black" />
                                <hr className="h-1 w-full bg-black" />
                                <hr className="h-1 w-full bg-black" />
                                <hr className="h-1 w-full bg-black" />
                                <hr className="h-1 w-full bg-black" />
                            </div>

                            <h2 className="text-[18px] md:text-[22px] text-black">{generatedCVV ? generatedCVV : 'xxx'}</h2>
                        </div>

                        <p className="text-[14px] md:text-[16px] leading-normal tracking-tight text-justify">This card is issued by and remains the property of Card Cafe. This card may be used only by the named cardholder and in accordance with the Card Cafe Terms and Conditions of Use</p>

                    </div>
                </div>
                <p className="text-center leading-relaxed tracking-wide font-bold">Credit Card Back View</p>
            </section>

            <section className="flex flex-col gap-4 text-[14px] md:text-[16px]">
                <h1 className="text-[38px] lg:text-[46px] font-extrabold text-center lg:text-left">Ready To Create & Test Beautifully Designed Credit Cards?</h1>

                <select
                    name=""
                    id=""
                    className="input"
                    onChange={(e) => setSelectedCardType(e.target.value)}
                >
                    <option value="option" className="bg-yellow text-white">--select card brand--</option>
                    <option value="Mastercard" className="bg-yellow text-white">Mastercard</option>
                    <option value="Visa" className="bg-yellow text-white">Visa</option>
                    <option value="Verve" className="bg-yellow text-white">Verve</option>
                    <option value="Maestro" className="bg-yellow text-white">Maestro</option>
                    <option value="American Express" className="bg-yellow text-white">American Express</option>
                    <option value="Discover" className="bg-yellow text-white">Discover</option>
                    <option value="JCB" className="bg-yellow text-white">JCB</option>
                    <option value="RuPay" className="bg-yellow text-white">RuPay</option>
                    <option value="Union Pay" className="bg-yellow text-white">Union Pay</option>
                    <option value="Voyager" className="bg-yellow text-white">Voyager</option>
                    <option value="Diners Club" className="bg-yellow text-white">Diners Club</option>
                </select>

                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                    <button onClick={handleGenerateClick} className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 w-full px-5 py-4 rounded-md text-white text-center">
                        Generate
                    </button>
                    <button onClick={handleDownloadClick} className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 w-full px-5 py-4 rounded-md text-white text-center">
                        Download
                    </button>
                </div>
            </section>

            <ToastContainer />
        </main>
    );
}

export default CardGen;
