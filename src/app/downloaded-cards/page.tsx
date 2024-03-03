"use client"
import BackToTop from "@/components/BackToTop";
import DownloadedCardDetails from "@/components/DownloadedCardDetails";
import SideBar from "@/components/SideBar";
import { useState } from "react";

const DownloadedCards = () => {
    const [menu, setMenu] = useState(false)
    return ( 
        <main className="w-full flex gap-10 bg-[#F5F5F5]">
            <SideBar  menu={menu} setMenu={setMenu}/>
            <DownloadedCardDetails menu={menu} setMenu={setMenu} title={"Downloaded Cards"} />
            <BackToTop targetId={"top"} />
        </main>
     );
}
 
export default DownloadedCards;