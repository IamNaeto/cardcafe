import Image from "next/image";
import Banner from "./Banner";
import ControlBtn from "./ControlBtn";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="relative min-h-screen grid gap-5 hero-bg px-[5%] py-14 pt-[100px] sm:pt-[80px] md:pt-[120px]">
      <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
        <motion.div
          className="flex flex-col justify-center md:justify-center gap-4 text-[14px] md:text-[16px] text-center md:text-left text-dark font-normal"
          initial={{ opacity: 0, y: 40 }} // Initial state: hidden, slightly off-screen
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and on-screen position
          transition={{ duration: 1, ease: "easeInOut" }} // Animation duration and easing
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold">Create Test Credit Cards Samples</h1>
          <p className="w-full lg:w-[75%]">
            We help you create dummy credit card samples with card numbers, CVV, and card name - for eCommerce data testing purposes.
          </p>
          <div className="mt-4">
            <ControlBtn caption={"Get Started"} />
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center my-8 md:my-0"
          initial={{ opacity: 0, scale: 0.7 }} // Initial state: hidden, slightly scaled down
          whileInView={{ opacity: 1, scale: 1 }} // Animate to full opacity and original scale
          transition={{ duration: 1, ease: "easeInOut" }} // Animation duration and easing
          viewport={{ once: true }}
        >
          <Image
            src={"/img/heroimage.png"}
            width={300}
            height={300}
            alt="hero-img"
            loading="lazy"
            className="w-[90%] md:w-[55%]"
          />
        </motion.div>
      </section>

      <Banner />
    </main>
  );
};

export default Hero;
