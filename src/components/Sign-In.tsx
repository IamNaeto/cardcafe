import Link from "next/link";
import Image from "next/image";

const Sign_In = () => {
    return (
        <main className="relative top-[60px] md:top-[75px] px-[5%] py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between bg-white">
            <section className="grid text-[14px] md:text-[16px] font-normal text-dark text-center md:text-left">
                <div className="grid gap-4 md:gap-2">
                    <h1 className="text-[36px] sm:text-[38px] md:text-[48px] font-bold">Sign in to continue</h1>
                    <p className="w-full lg:w-[75%] leading-relaxed tracking-wide">Welcome back to Card Cafe credit card generator. Please sign in to continue from where you left off.</p>
                </div>

                <div className="hidden md:block">
                    <Image src={"/img/signin-img.png"} alt={"sigin-img"} width={400} height={400} />
                </div>
            </section>

            <section className="grid place-items-center mt-6 md:mt-0">
                <form action="" className="w-full sm:w-[95%] xl:w-[70%] grid gap-6 text-[14px] md:text-[16px] text-dark shadow shadow-yellow rounded-xl py-8 px-10">
                    <label htmlFor="email">Email Address
                        <input name="email" id="email" type="email" placeholder="user@gmail.com" className="input" />
                    </label>
                    <label htmlFor="password">Password
                        <input name="password" id="password" type="password" placeholder="Enter Password" className="input" />
                    </label>

                    <button className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Sign In</button>

                    <p className="text-center">or</p>

                    <button className="px-5 py-3 rounded-md text-dark border border-dark flex items-center justify-center gap-4 hover:shadow-2xl transition-all delay-150">
                        <Image src={"/img/Google.png"} width={16} height={16} alt="google" />
                        Sign In With Google
                    </button>

                    <p className="text-center">
                        Don’t have an account? <Link href={"signup"} className="text-orange">Sign Up.</Link>
                    </p>

                </form>
            </section>
        </main>
    );
}

export default Sign_In;