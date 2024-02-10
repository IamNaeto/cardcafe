"use client"
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SignUp from "@/components/Sign-Up";

const Register = () => {
    return ( 
        <main>
            <Header />
            <SignUp />
            <Footer />
            <BackToTop targetId={"header"} />
        </main>
     );
}
 
export default Register;