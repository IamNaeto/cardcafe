"use client"
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sign_In from "@/components/Sign-In";

const SignIn = () => {
    return ( 
        <main>
            <Header />
            <Sign_In />
            <Footer />
            <BackToTop targetId={"top"} />
        </main>
     );
}
 
export default SignIn;