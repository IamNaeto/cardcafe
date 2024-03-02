"use client"
import SideBar from "@/components/SideBar";
import { useState } from "react";

const GeneratedCards = () => {
    const [menu, setMenu] = useState(false)
    return ( 
        <main className="w-full flex gap-10 bg-[#F5F5F5]">
            <SideBar  menu={menu} setMenu={setMenu}/>

        </main>
     );
}
 
export default GeneratedCards;