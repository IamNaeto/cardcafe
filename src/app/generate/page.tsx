"use client"
import BackToTop from "@/components/BackToTop";
import CardGen from "@/components/CardGen";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { UserProvider } from "@/app/hooks/UserContext";
import PrivateRoute from "../hooks/PrivateRoute";


const Generate = () => {
    return (
        <PrivateRoute>
            <main>
                <Header />
                <UserProvider>
                    <CardGen />
                </UserProvider>
                <Footer />
                <BackToTop targetId={"header"} />
            </main>
        </PrivateRoute>
    );
}

export default Generate;