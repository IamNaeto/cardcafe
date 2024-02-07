import Image from "next/image";
const Testimonials = () => {
    return ( 
        <main className="relative px-[5%] py-16 grid grid-cols-2 gap-5 items-center justify-between bg-white text-[16px] text-dark">
            <section className="grid gap-4">
                <div className="bg-[#E7F5F6] p-4 rounded-xl max-w-[500px] flex items-center justify-center gap-4 ml-[9%]">
                    <Image src={"/img/user-1.png"} width={70} height={70} alt="user1" loading="lazy"/>
                    <p>Card café is the best. I love the card designs, the navigation is simple and the platform is easy to use.</p>
                </div>

                <div className="bg-[#FEF4E8] p-4 rounded-xl max-w-[500px] flex items-center justify-center gap-4">
                    <Image src={"/img/user-2.png"} width={70} height={70} alt="user1" loading="lazy"/>
                    <p>Card cafe is the best. I love the card designs, the navigation is simple and the platform is easy to use.</p>
                </div>

                <div className="bg-[#F8EBF3] p-4 rounded-xl max-w-[500px] flex items-center justify-center gap-4 ml-[15%]">
                    <Image src={"/img/user-3.png"} width={70} height={70} alt="user1" loading="lazy"/>
                    <p>Card cafe is the best. I love the card designs, the navigation is simple and the platform is easy to use.</p>
                </div>

            </section>

            <section className="grid gap-4 font-normal">
                <h1 className="text-[46px] font-extrabold">What Others Think About Our Platform</h1>
                <p className="leading-relaxed tracking-wide">You’re probably still wondering how a credit card generator is useful when they cannot be used to purchase anything, right? Well it turns out there are loads of reasons why they’re useful, check out what our users are saying about the platform</p>
            </section>
        </main>
     );
}
 
export default Testimonials;