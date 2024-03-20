import { motion } from "framer-motion";
import Image from "next/image";
const HowItWorks = () => {
    return (
        <main className="relative px-[5%] py-10 grid grid-cols-1 md:grid-cols-2 items-center justify-between bg-white">
            <motion.div
                className="flex items-center md:items-start justify-center md:justify-start order-2 md:order-1"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <Image src={"/img/billy.png"} width={300} height={300} alt="billy" loading="lazy" />
            </motion.div>

            <motion.div
                className="grid gap-4 text-[14px] md:text-[16px]  text-dark font-normal order-1 md:order-2"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <h1 className="text-[38px] md:text-[46px] font-extrabold text-center md:text-left">How it works</h1>
                <p className="leading-relaxed tracking-wide text-justify">Our card details are randomly generated using the Luhn &#40; MOD 10&#41; algorithm. All real credit cards follow this algorithm, they have fixed prefixes and can be easily identified &#40; i.e VISA cards always start with a &apos;4&apos; &#41;. If you want to learn more about how the Luhn checksum formula works then check out an indepth breakdown. To try our tool, simply Create your account for free, select a credit card design of your choose, generate your card code and download your card to your user account.</p>
            </motion.div>
        </main>
    );
}

export default HowItWorks;