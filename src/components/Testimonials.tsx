import { motion } from "framer-motion";
import Image from "next/image";
const Testimonials = () => {
    return (
        <main className="relative px-[5%] py-16 grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between bg-white text-[14px] md:text-[16px] text-dark">
            <section className="grid gap-4 text-justify order-2 md:order-1">
                <motion.div 
                className="bg-[#E7F5F6] p-4 rounded-xl max-w-full md:max-w-[500px] flex items-center justify-center gap-4 ml-0 md:ml-[9%]"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                >
                    <Image src={"/img/user-1.png"} width={70} height={70} alt="user1" loading="lazy" />
                    <p>Card café is the best. I love the card designs, the navigation is simple and the platform is easy to use.</p>
                </motion.div>

                <motion.div 
                className="bg-[#FEF4E8] p-4 rounded-xl max-w-full md:max-w-[500px] flex items-center justify-center gap-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                >
                    <Image src={"/img/user-2.png"} width={70} height={70} alt="user1" loading="lazy" />
                    <p>Card cafe is the best. I love the card designs, the navigation is simple and the platform is easy to use.</p>
                </motion.div>

                <motion.div 
                className="bg-[#F8EBF3] p-4 rounded-xl max-w-full md:max-w-[500px] flex items-center justify-center gap-4 ml-0 md:ml-[15%]"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                >
                    <Image src={"/img/user-3.png"} width={70} height={70} alt="user1" loading="lazy" />
                    <p>Card cafe is the best. I love the card designs, the navigation is simple and the platform is easy to use.</p>
                </motion.div>
            </section>

            <motion.div
                className="grid gap-4 font-normal mt-5 md:mt-0 order-1 md:order-2"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <h1 className="text-[38px] md:text-[46px] font-extrabold text-center md:text-left">What Others Think About Our Platform</h1>
                <p className="leading-relaxed tracking-wide text-justify">You&#39;re probably still wondering how a credit card generator is useful when they cannot be used to purchase anything, right? Well it turns out there are loads of reasons why they&#39;re useful, check out what our users are saying about the platform</p>
            </motion.div>
        </main>
    );
}

export default Testimonials;