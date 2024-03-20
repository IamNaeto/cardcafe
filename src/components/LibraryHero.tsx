import Image from "next/image";
import Banner from "./Banner";
import Link from "next/link";
import { motion } from "framer-motion";
const LibraryHero = () => {
    return (
        <main className="relative min-h-screen grid gap-5 hero-bg px-[5%] py-14 pt-[80px] md:pt-[120px]">
            <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
                <motion.div
                    className="flex flex-col justify-center md:justify-center gap-4 text-[14px] md:text-[16px] text-center md:text-left text-dark font-normal"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-[46px] md:text-[48px] lg:text-[56px] font-extrabold">The Best Card Collection For You</h1>
                    <p className="w-full lg:w-[90%]">Our Credit Card Generator tool&apos;s primary purpose is for software testing and data verification purposes. Instead of using a real credit card, you can use our 100% valid credit cards to safely test your websites & apps.</p>
                </motion.div>
                <motion.div className="flex items-center justify-center mb-8 md:mb-0"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <Image src={"/img/creditcard.png"} width={500} height={500} alt="hero-img" loading="lazy" />
                </motion.div>
            </section>

            <Banner />
        </main>
    );
}

export default LibraryHero;