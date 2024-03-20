import { motion } from "framer-motion";
import Image from "next/image";
const DocFeatures = () => {
    return (
        <main className="relative top-[80px] px-[5%] py-16 grid grid-cols-1 md:grid-cols-2 items-center justify-between bg-white">
            <motion.section
                className="grid gap-4 text-[14px] md:text-[16px] text-dark font-normal"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <h1 className="text-[38px] md:text-[46px] font-extrabold text-center md:text-left">Features</h1>
                <ul className="leading-relaxed tracking-wide list-disc text-justify ml-5">
                    <li>Generate thousands of dummy credit card numbers & details using our free bulk generator tool.</li>
                    <li>Download and instantly save card samples to your account.</li>
                    <li>Each card is generated with your name as it appears on your account.</li>
                    <li>All major card issuers supported including VISA, Mastercard, Discover & American Express.</li>
                    <li>Suitable for all forms of data testing and verification purposes such as Stripe & PayPal Payments.</li>
                </ul>
            </motion.section>

            <motion.section
                className="flex items-center md:items-end justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <Image src={"/img/carddoc.png"} width={400} height={400} alt="karim" loading="lazy" className="w-full sm:w-[80%]" />
            </motion.section>
        </main>
    );
}

export default DocFeatures;