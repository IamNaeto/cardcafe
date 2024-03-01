import { RiAiGenerate } from "react-icons/ri";
import { IoCloudDownloadOutline } from "react-icons/io5";
const Statistics = () => {
    return ( 
        <main className="grid grid-cols-2 gap-4 items-center justify-center">
            <section className="flex items-center justify-center gap-4 bg-[#fff] rounded-xl p-10">
                <RiAiGenerate className="text-5xl p-2 text-[#17B643] bg-[#E8F8EC] rounded-full" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-[18px] md:text-[26px] font-bold text-center">25</h1>
                    <p className="text-[14px] md:text-[16px] text-center font-normal">Generated Cards</p>
                </div>
            </section>
            <section className="flex items-center justify-center gap-4 bg-[#fff] rounded-xl p-10">
                <IoCloudDownloadOutline className="text-5xl p-2 text-[#F3691B] bg-[#FEF0E8] rounded-full" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-[18px] md:text-[26px] font-bold text-center">75</h1>
                    <p className="text-[14px] md:text-[16px] text-center font-normal">Downloaded Cards</p>
                </div>
            </section>
        </main>
     );
}
 
export default Statistics;