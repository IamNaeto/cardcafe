import Link from "next/link";
import Image from "next/image";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

const Sign_In = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()
  const handleSignin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Email and password are required!")
      return;
    }

    // Simulate a loading process
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        localStorage.setItem('user', "loggedIn");
        toast.success("Login successful")
        setIsLoading(false)
        setTimeout(() => {
          router.replace("/generate");
        }, 2000);
      })

      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password")
          setIsLoading(false);
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid Email format");
          setIsLoading(false);
        } else if (error.code === "auth/invalid-login-credentials") {
          toast.error("Invalid login credentials, register");
          setIsLoading(false);
        } else if (error.code === "auth/invalid-credential") {
          toast.error("Invalid-credential, register");
          setIsLoading(false);
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too-many-requests, try in the next 2mins");
          setIsLoading(false);
        } else {
          toast.error(error.code);
          setIsLoading(false);
          return;
        }
      });
  };

  const handleGoogleSignin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    toast.info("Coming soon...")
  }

    return (
        <main className="relative top-[60px] md:top-[75px] px-[5%] py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between bg-white">
            <section className="grid text-[14px] md:text-[16px] font-normal text-dark text-center md:text-left">
                <div className="grid gap-4 md:gap-2">
                    <h1 className="text-[36px] sm:text-[38px] md:text-[48px] font-bold">Sign in to continue</h1>
                    <p className="w-full lg:w-[75%] leading-relaxed tracking-wide">Welcome back to Card Cafe credit card generator. Please sign in to continue from where you left off.</p>
                </div>

                <div className="hidden md:block">
                    <Image src={"/img/signin-img.png"} alt={"sigin-img"} width={400} height={400} loading="lazy"/>
                </div>
            </section>

            <section className="grid place-items-center mt-6 md:mt-0">
                <ToastContainer />
                <form action="" className="w-full sm:w-[95%] xl:w-[70%] grid gap-6 text-[14px] md:text-[16px] text-dark shadow shadow-yellow rounded-xl py-8 px-10">
                    <label htmlFor="email">Email Address
                        <input 
                        name="email" 
                        id="email" 
                        type="email" 
                        placeholder="user@gmail.com"
                        onChange={(e) => setEmail(e.target.value)} 
                        className="input" />
                    </label>
                    <label htmlFor="password">Password
                        <input 
                        name="password" 
                        id="password" 
                        type="password" 
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)} 
                        className="input" />
                    </label>

                    <button 
                    className={`bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white flex items-center justify-center ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                    onClick={handleSignin}
                    >
                        {isLoading ? (
                            <>
                                <LuLoader2  className="animate-spin text-white text-2xl text-center font-semibold" />
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    <p className="text-center">or</p>

                    <button 
                    className="px-5 py-3 rounded-md text-dark border border-dark flex items-center justify-center gap-4 hover:shadow-2xl transition-all delay-150"
                    onClick={handleGoogleSignin}>
                        <Image src={"/img/Google.png"} width={16} height={16} alt="google" loading="lazy"/>
                        Sign In With Google
                    </button>

                    <p className="text-center">
                        Don’t have an account? <Link href={"register"} className="text-orange">Sign Up.</Link>
                    </p>

                </form>
            </section>
        </main>
    );
}

export default Sign_In;