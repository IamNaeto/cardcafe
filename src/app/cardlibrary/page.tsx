"use client"
import BackToTop from "@/components/BackToTop";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LibraryHero from "@/components/LibraryHero";

const CardLibrary = () => {
    return ( 
        <main>
            <Header />
            <LibraryHero />
            <Collections />
            <Footer />
            <BackToTop targetId={"header"} />
        </main>
     );
}
 
export default CardLibrary;