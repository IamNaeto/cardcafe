"use client"
import SideBar from "@/components/SideBar";
import UserDashboard from "@/components/UserDashboard";
import { useState } from "react";

const Dashboard = () => {
    const [menu, setMenu] = useState(false)

    return ( 
        <main className="flex bg-[#F5F5F5]">
            <SideBar  menu={menu} setMenu={setMenu}/>
            <UserDashboard  menu={menu} setMenu={setMenu} title={"DashBoard"}/>
        </main>
     );
}
 
export default Dashboard;