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
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

interface props {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    user: any
}

const Nav: React.FC<props> = ({ menu, setMenu, title, user }) => {

    const [dropDown, setDropDown] = useState(false)
    const [notification, setNotification] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

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

    // Signout logics
    const router = useRouter()
    let userLoggedIn

    if (typeof window !== 'undefined') {
        userLoggedIn = localStorage.getItem('user');
    }

    const handleSignOut = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            signOut(auth)
            localStorage.removeItem('user')
            router.replace("/");
        }, 2000);
    }

    return (
        <motion.main
            className="relative flex items-center justify-between gap-4 py-4"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-center gap-4">
                <TfiMenuAlt className="block lg:hidden text-3xl text-orange cursor-pointer" onClick={toggleSideBar} />
                <h1 className="text-[#0F0F0F] text-[18px] md:text-[24px] font-bold">{title}</h1>
            </div>

            <div className="relative flex items-center justify-center gap-1 sm:gap-4 text-[#0F0F0F]">
                <GoBell className="text-2xl" cursor="pointer" onClick={toggleNotification} />
                {user?.img ? (
                    <Image src={user?.img} width={200} height={200} alt="user" className="w-[40px] h-[40px] rounded-full" />
                ) : (
                    <h1 className="text-[18px] font-bold px-2 py-[6px] rounded-full border-[3px] border-orange text-orange">
                        {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                    </h1>
                )}
                <h1 className="text-[14px] md:text-[16px] font-bold">{user?.userName}</h1>
                {dropDown ?
                    <IoIosArrowUp className="text-2xl" cursor="pointer" onClick={toggleDropDown} />
                    :
                    <IoIosArrowDown className="text-2xl" cursor="pointer" onClick={toggleDropDown} />
                }

                <motion.div
                    className={`${dropDown ? "absolute" : "hidden"} grid gap-4 top-12 left-0 rounded-2xl bg-[#fff] border border-orange shadow-2xl`}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Link href={"/profile"} className="flex items-center justify-center gap-2 pb-2 border-b border-b-orange px-2 overflow-hidden bg-[#fff] hover:bg-[#FEF0E8] delay-150 transition-all py-4 rounded-t-2xl">
                        {user?.img ? (
                            <Image src={user?.img} width={70} height={70} alt="user" className="w-[60px] h-[60px] shadow-xl rounded-full" />
                        ) : (
                            <h1 className="text-[24px] font-bold py-2 px-3 rounded-full border-[3px] border-orange text-orange">
                                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                            </h1>
                        )}
                        <div className="overflow-hidden">
                            <h1 className="text-[14px] md:text-[16px] font-bold">{user?.firstName} {user?.lastName}</h1>
                            <p className="text-[10px] md:text-[12px]">{user?.email}</p>
                        </div>
                    </Link>
                    <motion.div
                        className="grid gap-2 text-[14px] md:text-[16px] font-medium pb-4 px-2"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: dropDown ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Link href={"/"} className="flex items-center gap-4 hover:text-orange transition-all delay-150"> <IoHomeOutline className="text-xl text-orange" /> Home</Link>
                        <Link href={"/cardlibrary"} className="flex items-center gap-2 hover:text-orange transition-all delay-150"> <FaCcMastercard className="text-xl text-orange" /> Card Library</Link>
                        <Link href={"/documentation"} className="flex items-center gap-2 hover:text-orange transition-all delay-150"> <IoDocumentTextOutline className="text-xl text-orange" />Documentation</Link>
                        <Link href={"/generate"} className="flex items-center  gap-2 hover:text-orange transition-all delay-150"> <RiAiGenerate className="text-xl text-orange" /> Card Gen</Link>
                        <button
                            className="flex items-center  gap-2 hover:text-orange transition-all delay-150 cursor-pointer"
                            onClick={handleSignOut}
                        >
                            <AiOutlineLogout className="text-xl text-orange" />
                            {isLoading ? (
                                'Signing Out...'
                            ) : (
                                'Sign Out'
                            )}
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={`${notification ? "absolute" : "hidden"} grid gap-4 top-12 left-0 rounded-2xl bg-[#fff] border border-orange shadow-2xl py-4 px-2`}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <h1 className="text-[14px] md:text-[16px] font-semibold border-b border-b-orange py-2">Notifications</h1>

                    <p className="text-center text-[12px] md:text-[14px] font-normal">No notification at the moment</p>
                </motion.div>
            </div>
        </motion.main>
    );
}

export default Nav;