"use client"
import BackToTop from "@/components/BackToTop";
import SideBar from "@/components/SideBar";
import UserDashboard from "@/components/UserDashboard";
import { useState } from "react";
import { UserProvider } from "@/app/hooks/UserContext";
import PrivateRoute from "../hooks/PrivateRoute";
import AutoLogout from "../hooks/AutoLogout";

const Dashboard = () => {
    const [menu, setMenu] = useState(false)

    return (
        <PrivateRoute>
            <main className="flex bg-[#F5F5F5]">
                <SideBar menu={menu} setMenu={setMenu} />
                <UserProvider>
                    <UserDashboard menu={menu} setMenu={setMenu} title={"DashBoard"} />
                </UserProvider>
                <BackToTop targetId={"top"} />
                <AutoLogout />
            </main>
        </PrivateRoute>
    );
}

export default Dashboard;