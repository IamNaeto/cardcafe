"use client"
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sign_In from "@/components/Sign-In";
import RedirectOnAuth from "../hooks/RedirectOnAuth";

const SignIn = () => {
    return (
        <RedirectOnAuth>
            <main>
                <Header />
                <Sign_In />
                <Footer />
                <BackToTop targetId={"top"} />
            </main>
        </RedirectOnAuth>
    );
}

export default SignIn;