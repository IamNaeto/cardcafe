"use client"
import UserProfile from "@/components/UserProfile";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import BackToTop from "@/components/BackToTop";
import { UserProvider } from "../hooks/UserContext";
import PrivateRoute from "../hooks/PrivateRoute";

const Profile = () => {
    const [menu, setMenu] = useState(false)
    return (
        <PrivateRoute>
            <main className="w-full flex gap-10 bg-[#F5F5F5]">
                <SideBar menu={menu} setMenu={setMenu} />
                <UserProvider>
                    <UserProfile menu={menu} setMenu={setMenu} title={"Profile"} />
                </UserProvider>
                <BackToTop targetId={"top"} />
            </main>
        </PrivateRoute>
    );
}

export default Profile;