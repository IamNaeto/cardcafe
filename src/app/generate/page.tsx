"use client"
import BackToTop from "@/components/BackToTop";
import CardGen from "@/components/CardGen";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Generate = () => {
    return ( 
        <main>
            <Header />
            <CardGen />
            <Footer />
            <BackToTop targetId={"header"} />
        </main>
     );
}
 
export default Generate;