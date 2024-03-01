import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
const Nav = () => {
    return ( 
        <main className="relative flex items-center justify-between gap-4 py-4">
                <h1 className="text-[#0F0F0F] text-[18px] md:text-[24px] font-bold">Dashboard</h1>

                <div className="flex items-center justify-center gap-4 text-[#0F0F0F]">
                    <GoBell className="text-2xl" cursor="pointer"/>
                    <Image src={"/img/user-avatar.png"} width={40} height={40} alt="user"/>
                    <h1 className="text-[14px] md:text-[16px]">Annabel Monday</h1>
                    <IoIosArrowDown className="text-2xl" cursor="pointer"/>
                </div>
        </main>
     );
}
 
export default Nav;