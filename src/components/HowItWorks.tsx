import Image from "next/image";
const HowItWorks = () => {
    return (
        <main className="relative px-[5%] py-10 grid grid-cols-1 md:grid-cols-2 items-center justify-between bg-white">
            <section className="flex items-center md:items-start justify-center md:justify-start">
                <Image src={"/img/billy.png"} width={300} height={300} alt="billy" loading="lazy" />
            </section>

            <section className="grid gap-4 text-[14px] md:text-[16px]  text-dark font-normal">
                <h1 className="text-[38px] md:text-[46px] font-extrabold text-center md:text-left">How it works</h1>
                <p className="leading-relaxed tracking-wide text-justify">Our card details are randomly generated using the Luhn &#40; MOD 10&#41; algorithm. All real credit cards follow this algorithm, they have fixed prefixes and can be easily identified &#40; i.e VISA cards always start with a &apos;4&apos; &#41;. If you want to learn more about how the Luhn checksum formula works then check out an indepth breakdown. To try our tool, simply Create your account for free, select a credit card design of your choose, generate your card code and download your card to your user account.</p>
            </section>
        </main>
    );
}

export default HowItWorks;