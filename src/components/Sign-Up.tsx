import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const SignUp = () => {
    return (
        <main className="relative top-[60px] md:top-[75px] px-[5%] py-10 grid grid-cols-1 md:grid-cols-2 gap-6 justify-between bg-white">
            <section className="grid text-[14px] md:text-[16px] font-normal text-dark text-center md:text-left">
                <div className="grid gap-4 md:gap-2">
                    <h1 className="text-[36px] sm:text-[38px] md:text-[48px] font-bold">Create your free account</h1>
                    <p className="w-full lg:w-[80%] leading-relaxed tracking-wide">Do so much more when you create an account on card cafe. Sign up now and start enjoying unlimited features.</p>

                    <Link href={"/"} className="flex items-center gap-2 hover:gap-4 transition-all delay-150 text-yellow">Read Documentation <FaArrowRightLong /></Link>
                </div>

                <div className="hidden md:block">
                    <Image src={"/img/register-img.png"} alt={"register img"} width={400} height={400} />
                </div>
            </section>

            <section className="grid place-items-center mt-6 md:mt-0">
                <form action="" className="w-full sm:w-[95%] xl:w-[70%] grid gap-6 text-[14px] md:text-[16px] text-dark shadow shadow-yellow rounded-xl py-8 px-10">
                    <label htmlFor="fname">First Name
                        <input name="fname" id="fname" type="text" placeholder="user@gmail.com" className="input" />
                    </label>
                    <label htmlFor="sname">Surname
                        <input name="sname" id="sname" type="text" placeholder="user@gmail.com" className="input" />
                    </label>
                    <label htmlFor="email">Email Address
                        <input name="email" id="email" type="email" placeholder="user@gmail.com" className="input" />
                    </label>
                    <label htmlFor="password">Password
                        <input name="password" id="password" type="password" placeholder="Enter Password" className="input" />
                    </label>
                    <label htmlFor="cpassword">Confirm Password
                        <input name="cpassword" id="cpassword" type="password" placeholder="Enter Password" className="input" />
                    </label>

                    <button className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Sign In</button>

                    <p className="text-center">
                        Already a member? <Link href={"register"} className="text-orange hover:text-yellow transition-all delay-150"> Sign in instead..</Link>
                    </p>

                </form>
            </section>
        </main>
    );
}

export default SignUp;