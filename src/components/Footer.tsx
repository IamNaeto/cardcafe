import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <main className="relative bottom-0 top-20 px-[5%] py-10 grid items-center justify-center place-items-center gap-5 bg-dark text-white text-[14px] md:text-[16px] font-normal">
            <Link href={"/"}>
                <Image src={"/img/logo.png"} width={80} height={80} alt="logo" />
            </Link>
            <p className="w-full md:w-[70%] text-center">The cc_gen is an online digital library of credit card design which enable users to view, download and make use of credit cards samples as a resource in their own project.</p>
            <div className="flex items-center justify-center gap-5">
                <a href="" className="hover:text-orange transition-all delay-150">Home</a>
                <a href="" className="hover:text-orange transition-all delay-150">Card Library</a>
                <a href="" className="hover:text-orange transition-all delay-150">Documentations</a>
            </div>
            <div className="flex items-center justify-center gap-5 text-2xl">
                <FaFacebookF className="hover:text-orange transition-all delay-150 cursor-pointer" />
                <FaXTwitter className="hover:text-orange transition-all delay-150 cursor-pointer" />
                <FaInstagram className="hover:text-orange transition-all delay-150 cursor-pointer" />
            </div>
            <p className="mt-5 md:mt-10">Copyright © 2024. CC_Gen. All rights reserved.</p>
        </main>
    );
}

export default Footer;