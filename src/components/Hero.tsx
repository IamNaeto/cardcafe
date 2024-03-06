import Image from "next/image";
import Banner from "./Banner";
import ControlBtn from "./ControlBtn";

const Hero = () => {
    return (
        <main className="relative grid gap-5 hero-bg px-[5%] py-14 pt-[80px] md:pt-[120px]">
            <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
                <div className="flex flex-col justify-center md:justify-center gap-4 text-[14px] md:text-[16px] text-center md:text-left text-dark font-normal">
                    <h1 className="text-[48px] lg:text-[56px] font-extrabold">Create Test Credit Cards Samples</h1>
                    <p className="w-full lg:w-[75%]">We help you create dummy credit card samples with card numbers, CVV, and card name - for eCommerce data testing purposes.</p>
                    <div className="mt-4">
                       <ControlBtn caption={"Get Started"} />
                    </div>
                </div>
                <div className="flex items-center justify-center my-8 md:my-0">
                    <Image src={"/img/heroimage.png"} width={300} height={300} alt="hero-img" loading="lazy" className="w-[90%] md:w-[55%]" />
                </div>
            </section>

            <Banner />
        </main>
    );
}

export default Hero;