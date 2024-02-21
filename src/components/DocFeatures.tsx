import Image from "next/image";
const DocFeatures = () => {
    return (
        <main className="relative top-[80px] px-[5%] py-16 grid grid-cols-1 md:grid-cols-2 items-center justify-between bg-white">
            <section className="grid gap-4 text-[14px] md:text-[16px] text-dark font-normal">
                <h1 className="text-[38px] md:text-[46px] font-extrabold text-center md:text-left">Features</h1>
                <ul className="leading-relaxed tracking-wide list-disc text-justify ml-5">
                    <li>Generate thousands of dummy credit card numbers & details using our free bulk generator tool.</li>
                    <li>Download and instantly save card samples to your account.</li>
                    <li>Each card is generated with your name as it appears on your account.</li>
                    <li>All major card issuers supported including VISA, Mastercard, Discover & American Express.</li>
                    <li>Suitable for all forms of data testing and verification purposes such as Stripe & PayPal Payments.</li>
                </ul>
            </section>

            <section className="flex items-center md:items-end justify-center md:justify-end">
                <Image src={"/img/carddoc.png"} width={400} height={400} alt="karim" loading="lazy" className="w-full sm:w-[80%]"/>
            </section>
        </main>
    );
}

export default DocFeatures;