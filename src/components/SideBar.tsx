"use client"
import Image from "next/image";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { RiAiGenerate } from "react-icons/ri";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
const SideBar = () => {
    const pathName = usePathname()
    return ( 
        <main className="fixed left-0 w-[230px] h-screen bg-[#fff]">
            <section className="w-full h-full text-[14px] md:text-[16px] py-10">
                <Link href={"/"} className="grid items-center justify-center mb-10">
                    <Image src={"/img/logo.png"} width={100} height={100} alt="logo"/>
                </Link>

                <div className="text-[#0F0F0F] grid gap-4">
                    <Link href="/dashboard" className={pathName === "/dashboard" ? "flex items-center gap-4 p-4 bg-orange text-[#fff] transition-all delay-150 cursor-pointer" : "flex items-center gap-4 p-4 hover:bg-orange hover:text-[#fff] transition-all delay-150 cursor-pointer"}>
                        <LuLayoutDashboard className="text-2xl" />
                        <h1>Dashboard</h1>
                    </Link>
                    <Link href="/profile" className={pathName === "/profile" ? "flex items-center gap-4 p-4 bg-orange text-[#fff] transition-all delay-150 cursor-pointer" : "flex items-center gap-4 p-4 hover:bg-orange hover:text-[#fff] transition-all delay-150 cursor-pointer"}>
                        <LuUser2 className="text-2xl" />
                        <h1>Profile</h1>
                    </Link>
                    <Link href="/generated-cards" className={pathName === "/generated-cards" ? "flex items-center gap-4 p-4 bg-orange text-[#fff] transition-all delay-150 cursor-pointer" : "flex items-center gap-4 p-4 hover:bg-orange hover:text-[#fff] transition-all delay-150 cursor-pointer"}>
                        <RiAiGenerate className="text-2xl" />
                        <h1>Generated Cards</h1>
                    </Link>
                    <Link href="/downloaded-cards" className={pathName === "/downloaded-cards" ? "flex items-center gap-4 p-4 bg-orange text-[#fff] transition-all delay-150 cursor-pointer" : "flex items-center gap-4 p-4 hover:bg-orange hover:text-[#fff] transition-all delay-150 cursor-pointer"}>
                        <IoCloudDownloadOutline className="text-2xl" />
                        <h1>Downloaded Cards</h1>
                    </Link>
                    
                </div>
            </section>

        </main>
     );
}
 
export default SideBar;