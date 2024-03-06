"use client"
import BackToTop from "@/components/BackToTop";
import CardGen from "@/components/CardGen";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { UserProvider } from "@/app/hooks/UserContext";


const Generate = () => {
    return ( 
        <main>
            <Header />
            <UserProvider>
                <CardGen />
            </UserProvider>
            <Footer />
            <BackToTop targetId={"header"} />
        </main>
     );
}
 
export default Generate;