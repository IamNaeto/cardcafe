import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import html2canvas from "html2canvas";
import JSZip from 'jszip';

const CardGen = () => {
    const [cardBg, setCardBg] = useState<string>('from-orange to-yellow');
    const [selectedCardType, setSelectedCardType] = useState<string | null>(null);
    const [generatedCardNumber, setGeneratedCardNumber] = useState<string | null>(null);
    const [generatedCVV, setGeneratedCVV] = useState<string | null>(null);
    const [showGeneratedDetails, setShowGeneratedDetails] = useState(false);
    const [selectedCardTypeBeforeGenerate, setSelectedCardTypeBeforeGenerate] = useState<string | null>(null);

    const handleSmallDivClick = (bgClass: string) => {
        setCardBg(bgClass);
    };

    const getRandomDigits = (length: number) => {
        return Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0');
    };

    const handleGenerateClick = () => {
        if (!selectedCardType) {
            toast.error("Please select a card type");
            return;
        }

        if (selectedCardType === "Visa") {
            setGeneratedCardNumber(`4${getRandomDigits(15)}`);
            setGeneratedCVV(getRandomDigits(3));
            setSelectedCardTypeBeforeGenerate(selectedCardType);
            setShowGeneratedDetails(true);
            toast.success("Visa card generated successfully");
        } else if (selectedCardType === "Mastercard") {
            setGeneratedCardNumber(`5${getRandomDigits(15)}`);
            setGeneratedCVV(getRandomDigits(3));
            setSelectedCardTypeBeforeGenerate(selectedCardType);
            setShowGeneratedDetails(true);
            toast.success("Mastercard card generated successfully");
        } else if (selectedCardType === "Verve") {
            setGeneratedCardNumber(`6${getRandomDigits(15)}`);
            setGeneratedCVV(getRandomDigits(3));
            setSelectedCardTypeBeforeGenerate(selectedCardType);
            setShowGeneratedDetails(true);
            toast.success("Verve card generated successfully");
        } else {
            setGeneratedCardNumber(null);
            setGeneratedCVV(null);
            setSelectedCardTypeBeforeGenerate(null);
            setShowGeneratedDetails(false);
            toast.error("Please select a valid card brand to generate");
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
            } catch (error) {
                console.error("Error downloading card images:", error);
                toast.error("Failed to download card images. Please try again.");
            }
        }
    };


    return (
        <main className="relative top-[60px] sm:top-[70px] px-[5%] py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <section className="text-[14px] md:text-[16px] bg-[#F8F8F8] p-3 sm:p-6 md:p-10 rounded-2xl grid gap-4">
                <div id="card-front" className={`bg-gradient-to-br ${cardBg} p-4 sm:p-6 rounded-2xl min-h-[300px] text-white relative`}>
                    <div className="flex items-end justify-end">
                        <Image src={"/img/cardicon.png"} width={50} height={50} alt="cardicon" loading="lazy" className="mb-4" />
                    </div>

                    <div className="grid gap-6">
                        <h1 className="text-[24px] md:text-[28px] font-medium">Card Holder’s Name</h1>
                        <h2 className="text-[18px] md:text-[22px]">{generatedCardNumber ? generatedCardNumber : 'xxxx    xxxx    xxxx    xxxx'}</h2>
                        <Image src={"/img/cardchip.png"} width={50} height={50} alt="cardicon" loading="lazy" />
                    </div>

                    {showGeneratedDetails && (
                        <div className="flex items-center justify-between gap-4 text-white mt-5">
                            <p>Expiry Date: {new Date(new Date().setFullYear(new Date().getFullYear() + 4)).toLocaleDateString()}</p>
                            <Image src={getCardImage()} width={50} height={50} alt="" loading="lazy" />
                        </div>
                    )}
                </div>

                <p className="text-center leading-relaxed tracking-wide">Credit Card Front View</p>

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

                        <div className="flex items-center justify-between gap-2 bg-white p-2">
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
                <p className="text-center leading-relaxed tracking-wide">Credit Card Back View</p>
            </section>

            <section className="flex flex-col gap-4 text-[14px] md:text-[16px]">
                <h1 className="text-[38px] lg:text-[46px] font-extrabold text-center lg:text-left">Ready To Create & Test Beautifully Designed Credit Cards?</h1>

                <select
                    name=""
                    id=""
                    className="input"
                    onChange={(e) => setSelectedCardType(e.target.value)}
                >
                    <option value="option">--select card brand--</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Visa">Visa</option>
                    <option value="Verve">Verve</option>
                </select>

                <div className="w-full flex items-center justify-center gap-4 mt-4">
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
