import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
const User = () => {
    return ( 
        <main className="w-full xl:w-auto flex flex-col h-full items-center justify-center gap-4 bg-[#fff] p-10 rounded-xl text-[#0F0F0F] text-center">
                <Image src={"/img/avatar.png"} width={200} height={200} alt="user avatar"/>
                <h1 className="text-[18px] md:text-[24px] font-bold">Annabel Monday</h1>
                <p className="text-[14px] md:text-[16px] font-normal">annabeltwayne97@gmail.com</p>
                <div className="flex items-center">
                    <CiLocationOn className="text-2xl" />
                    <p className="text-[12px] md:text-[14px]">Lagos, Nigeria</p>
                </div>
                <button className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Upload Image</button>

        </main>
     );
}
 
export default User;