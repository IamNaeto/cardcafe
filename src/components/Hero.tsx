import Image from "next/image";
import Banner from "./Banner";
import ControlBtn from "./ControlBtn";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="relative min-h-screen grid gap-5 hero-bg px-[5%] py-14 pt-[90px] md:pt-[100px]">
      <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
        <motion.div
          className="flex flex-col justify-center md:justify-center gap-4 text-[14px] md:text-[16px] text-center md:text-left text-dark font-normal"
          initial={{ opacity: 0, y: 40 }} // Initial state: hidden, slightly off-screen
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and on-screen position
          transition={{ duration: 1, ease: "easeInOut" }} // Animation duration and easing
          viewport={{ once: true }} //Allow to only view the animation once
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">Create Test Credit Cards Samples</h1>
          <p className="w-full lg:w-[75%]">
            We help you create dummy credit card samples with card numbers, CVV, and card name - for eCommerce data testing purposes.
          </p>
          <div className="mt-2">
            <ControlBtn caption={"Get Started"} />
          </div>
        </motion.div>

        <motion.div
          className="flex items-center md:items-end justify-center md:justify-end my-4 md:my-0"
          initial={{ opacity: 0, scale: 0.7 }} // Initial state: hidden, slightly scaled down
          whileInView={{ opacity: 1, scale: 1 }} // Animate to full opacity and original scale
          transition={{ duration: 1, ease: "easeInOut" }} // Animation duration and easing
          viewport={{ once: true }} //Allow animation view once
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
