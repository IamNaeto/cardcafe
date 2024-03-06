import Image from "next/image";
import { useState } from "react";
import ControlBtn from "./ControlBtn";

const CardDoc = () => {
    const [cardBg, setCardBg] = useState<string>('from-orange to-yellow');

    const handleSmallDivClick = (bgClass: string) => {
        setCardBg(bgClass);
    };
    return (
        <main className="relative top-[60px] sm:top-[70px] px-[5%] py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <section className="text-[14px] md:text-[16px] bg-[#F8F8F8] p-3 sm:p-6 md:p-10 rounded-2xl grid gap-4">
                <div className={`bg-gradient-to-br ${cardBg} p-4 sm:p-6 rounded-2xl min-h-[300px] text-white`}>
                    <div className="flex items-end justify-end">
                        <Image src={"/img/cardicon.png"} width={50} height={50} alt="cardicon" loading="lazy" className="mb-4" />
                    </div>

                    <div className="grid gap-6">
                        <h1 className="text-[24px] md:text-[28px] font-medium">Card Holder&apos;s Name</h1>
                        <p className="text-[18px] md:text-[22px]">xxxx    xxxx    xxxx    xxxx</p>
                        <Image src={"/img/cardchip.png"} width={50} height={50} alt="cardicon" loading="lazy" />
                    </div>
                </div>

                <p className="text-center leading-relaxed tracking-wide">Business credit card</p>

                <div className="flex items-center justify-center gap-4">
                    <div
                        className={`bg-gradient-to-br from-orange to-yellow ${cardBg == 'from-orange to-yellow' ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"} rounded-lg cursor-pointer`}
                        onClick={() => handleSmallDivClick('from-orange to-yellow')}
                    ></div>
                    <div
                        className={`bg-gradient-to-br from-purple to-green ${cardBg == 'from-purple to-green' ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"} rounded-lg cursor-pointer`}
                        onClick={() => handleSmallDivClick('from-purple to-green')}
                    ></div>
                    <div
                        className={`bg-gradient-to-br from-purple to-orange ${cardBg == 'from-purple to-orange' ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"}  rounded-lg cursor-pointer`}
                        onClick={() => handleSmallDivClick('from-purple to-orange')}
                    ></div>
                    <div
                        className={`bg-gradient-to-br from-black to-red ${cardBg == 'from-black to-red' ? "w-[40px] h-[40px]" : "w-[50px] h-[50px]"}  rounded-lg cursor-pointer`}
                        onClick={() => handleSmallDivClick('from-black to-red')}
                    ></div>
                </div>
            </section>

            <section className="flex flex-col gap-4 text-[14px] md:text-[16px]">
                <h1 className="text-[38px] lg:text-[46px] font-extrabold text-center lg:text-left">Create & Test  Beautifully Designed Credit Cards</h1>
                <p className="leading-relaxed tracking-wide text-center lg:text-justify">Our Credit Card Generator tool&apos;s primary purpose is for software testing and data verification purposes. Instead of using a real credit card, you can use our 100% valid credit cards to safely test your websites & apps. Using our card numbers means no money will be deducted from any account whenever an application is being tested. It allows you to validate all payment testing scenarios such as credit card number length, format, type, issuing network etc.</p>

                <div className="w-full flex items-center lg:items-start justify-center lg:justify-start">
                    <ControlBtn caption={"Try It"} />
                </div>

            </section>
        </main>
    );
}

export default CardDoc;