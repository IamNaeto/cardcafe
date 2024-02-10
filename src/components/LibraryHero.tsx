import Image from "next/image";
import Banner from "./Banner";
import Link from "next/link";
const LibraryHero = () => {
    return (
        <main className="relative grid gap-5 hero-bg px-[5%] py-14 pt-[80px] md:pt-[120px]">
            <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
                <div className="flex flex-col justify-center md:justify-center gap-4 text-[14px] md:text-[16px] text-center md:text-left text-dark font-normal">
                    <h1 className="text-[48px] lg:text-[56px] font-extrabold">The Best Card Collection For You</h1>
                    <p className="w-full lg:w-[90%]">Our Credit Card Generator tool's primary purpose is for software testing and data verification purposes. Instead of using a real credit card, you can use our 100% valid credit cards to safely test your websites & apps.</p>
                </div>
                <div className="flex items-center justify-center mb-8 md:mb-0">
                    <Image src={"/img/creditcard.png"} width={500} height={500} alt="hero-img" loading="lazy"  />
                </div>
            </section>

            <Banner />
        </main>
    );
}

export default LibraryHero;