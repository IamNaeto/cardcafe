import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoHomeOutline } from "react-icons/io5";
import { FaCcMastercard } from "react-icons/fa";
import { RiAiGenerate } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface props {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    user: any
}

const Nav: React.FC<props> = ({ menu, setMenu, title, user, }) => {

    const [dropDown, setDropDown] = useState(false)
    const [notification, setNotification] = useState(false)

    const toggleSideBar = () => {
        setMenu(!menu);
    };

    const toggleDropDown = () => {
        setDropDown(!dropDown);
        setNotification(false)
    };
    const toggleNotification = () => {
        setNotification(!notification);
        setDropDown(false)
    };

    return (
        <main className="relative flex items-center justify-between gap-4 py-4">
            <div className="flex items-center justify-center gap-4">
                <TfiMenuAlt className="block lg:hidden text-3xl text-orange cursor-pointer" onClick={toggleSideBar} />
                <h1 className="text-[#0F0F0F] text-[18px] md:text-[24px] font-bold">{title}</h1>
            </div>

            <div className="relative flex items-center justify-center gap-4 text-[#0F0F0F]">
                <GoBell className="text-2xl" cursor="pointer" onClick={toggleNotification}/>
                <Image src={"/img/user-avatar.png"} width={40} height={40} alt="user" />
                <h1 className="text-[14px] md:text-[16px]">{user?.firstName} {user?.lastName}</h1>
                {dropDown ?
                <IoIosArrowUp className="text-2xl" cursor="pointer" onClick={toggleDropDown}/>
                :
                <IoIosArrowDown className="text-2xl" cursor="pointer" onClick={toggleDropDown}/>
                }

                <div className={`${dropDown ? "absolute" : "hidden"} grid gap-4 top-12 left-0 rounded-2xl bg-[#fff] border border-orange shadow-2xl py-4 px-2`}>
                    <div className="flex items-center justify-center gap-2 pb-2 border-b border-b-orange px-2">
                        <Image src={"/img/avatar.png"} width={70} height={70} alt="user" />
                        <div className="overflow-hidden">
                            <h1 className="text-[14px] md:text-[16px] font-bold">{user?.firstName} {user?.lastName}</h1>
                            <p className="text-[10px] md:text-[12px]">{user?.email}</p>
                        </div>
                    </div>
                    <div className="grid gap-2 text-[14px] md:text-[16px] font-medium">
                        <Link href={"/"} className="flex items-center gap-4 hover:text-orange transition-all delay-150"> <IoHomeOutline className="text-xl text-orange" /> Home</Link>
                        <Link href={"/cardlibrary"} className="flex items-center gap-2 hover:text-orange transition-all delay-150"> <FaCcMastercard className="text-xl text-orange" /> Card Library</Link>
                        <Link href={"/documentation"} className="flex items-center gap-2 hover:text-orange transition-all delay-150"> <IoDocumentTextOutline className="text-xl text-orange" />Documentation</Link>
                        <Link href={"/generate"} className="flex items-center  gap-2 hover:text-orange transition-all delay-150"> <RiAiGenerate className="text-xl text-orange" /> Card Gen</Link>
                        <button className="flex items-center  gap-2 hover:text-orange transition-all delay-150 cursor-pointer"> <AiOutlineLogout className="text-xl text-orange" /> Logout</button>
                    </div>
                </div>

                <div className={`${notification ? "absolute" : "hidden"} grid gap-4 top-12 left-0 rounded-2xl bg-[#fff] border border-orange shadow-2xl py-4 px-2`}>
                    <h1 className="text-[14px] md:text-[16px] font-semibold border-b border-b-orange py-2">Notifications</h1>

                    <p className="text-center text-[12px] md:text-[14px] font-normal">No notification at the moment</p>
                </div>
            </div>
        </main>
    );
}

export default Nav;