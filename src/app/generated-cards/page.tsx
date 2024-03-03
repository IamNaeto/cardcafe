"use client"
import BackToTop from "@/components/BackToTop";
import GeneratedCardDetails from "@/components/GeneratedCardDetails";
import SideBar from "@/components/SideBar";
import { useState } from "react";

const GeneratedCards = () => {
    const [menu, setMenu] = useState(false)
    return ( 
        <main className="w-full flex gap-10 bg-[#F5F5F5]">
            <SideBar  menu={menu} setMenu={setMenu}/>
            <GeneratedCardDetails menu={menu} setMenu={setMenu} title={"Generated"} />
            <BackToTop targetId={"top"} />
        </main>
     );
}
 
export default GeneratedCards;