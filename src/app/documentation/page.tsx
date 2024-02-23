"use client"
import BackToTop from "@/components/BackToTop";
import Documentations from "@/components/Documentations";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Documentation = () => {
    return ( 
        <main>
            <Header />
            <Documentations />
            <Footer />
            <BackToTop targetId={"header"} />
        </main>
     );
}
 
export default Documentation;