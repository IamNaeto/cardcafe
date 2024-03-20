import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <main className="relative bottom-0 top-20 px-[5%] py-10 grid items-center justify-center place-items-center gap-5 bg-dark text-white text-[14px] md:text-[16px] font-normal">
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
                <Link href={"/"}>
                <Image src={"/img/logo.png"} width={80} height={80} alt="logo" />
            </Link>
            </motion.div>
            <motion.p 
            className="w-full md:w-[70%] text-center"
            initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >The card cafe is an online digital library of credit card design which enable users to view, download and make use of credit cards samples as a resource in their own project.</motion.p>
            <motion.div
                className="flex items-center justify-center gap-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <a href="" className="hover:text-orange transition-all delay-150">Home</a>
                <a href="" className="hover:text-orange transition-all delay-150">Card Library</a>
                <a href="" className="hover:text-orange transition-all delay-150">Documentations</a>
            </motion.div>
            <motion.div
                className="flex items-center justify-center gap-5 text-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <FaFacebookF className="hover:text-orange transition-all delay-150 cursor-pointer" />
                <FaXTwitter className="hover:text-orange transition-all delay-150 cursor-pointer" />
                <FaInstagram className="hover:text-orange transition-all delay-150 cursor-pointer" />
            </motion.div>
            <motion.p
                className="mt-5 md:mt-10 text-[13px] md:[15px] text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >Copyright © 2024. CC_Gen. All rights reserved.</motion.p>
        </main>
    );
}

export default Footer;