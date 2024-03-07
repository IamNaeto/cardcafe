"use client"
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SignUp from "@/components/Sign-Up";
import RedirectOnAuth from "../hooks/RedirectOnAuth";

const Register = () => {
    return (
        <RedirectOnAuth>
        <main>
            <Header />
            <SignUp />
            <Footer />
            <BackToTop targetId={"top"} />
        </main>
        </RedirectOnAuth> 
     );
}
 
export default Register;