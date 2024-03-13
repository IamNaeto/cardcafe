import { RiAiGenerate } from "react-icons/ri";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { User } from "firebase/auth";
import { useEffect } from "react";

interface statProps {
    user: any | User | null;
}
const Statistics: React.FC<statProps> = ({ user }) => {

    // downloaded cards total
    let downloadedCardsTotal
    const downloadedCards = user?.downloadedCards;
    if (downloadedCards) {
        const downloadedCardsKey = Object.keys(downloadedCards);
        downloadedCardsTotal = downloadedCardsKey.length
    } else {
        downloadedCardsTotal = 0
    }

    // generated cards total
    let generatedCardsTotal
    const generatedCards = user?.generatedCards;
    if (generatedCards) {
        const generatedCardsKey = Object.keys(generatedCards);
        generatedCardsTotal = generatedCardsKey.length
    } else {
        generatedCardsTotal = 0
    }



    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
            <section className="flex items-center justify-center gap-4 bg-[#fff] rounded-xl p-10">
                <RiAiGenerate className="text-5xl p-2 text-[#17B643] bg-[#E8F8EC] rounded-full" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-[18px] md:text-[26px] font-bold text-center">{generatedCardsTotal}</h1>
                    <p className="text-[14px] md:text-[16px] text-center font-normal">Generated Cards</p>
                </div>
            </section>
            <section className="flex items-center justify-center gap-4 bg-[#fff] rounded-xl p-10">
                <IoCloudDownloadOutline className="text-5xl p-2 text-[#F3691B] bg-[#FEF0E8] rounded-full" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-[18px] md:text-[26px] font-bold text-center">{downloadedCardsTotal}</h1>
                    <p className="text-[14px] md:text-[16px] text-center font-normal">Downloaded Cards</p>
                </div>
            </section>
        </main>
    );
}

export default Statistics;