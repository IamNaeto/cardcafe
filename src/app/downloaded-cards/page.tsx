"use client"
import BackToTop from "@/components/BackToTop";
import DownloadedCardDetails from "@/components/DownloadedCardDetails";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import { UserProvider } from "../hooks/UserContext";

const DownloadedCards = () => {
    const [menu, setMenu] = useState(false)
    return ( 
        <main className="w-full flex gap-10 bg-[#F5F5F5]">
            <SideBar  menu={menu} setMenu={setMenu}/>
            <UserProvider>
                <DownloadedCardDetails menu={menu} setMenu={setMenu} title={"Downloaded Cards"} />
            </UserProvider>
            <BackToTop targetId={"top"} />
        </main>
     );
}
 
export default DownloadedCards;