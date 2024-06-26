import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { LuLoader2 } from "react-icons/lu";
import { auth, database } from '@/app/firebase/config';
import { get, ref, set } from 'firebase/database';
import { motion } from "framer-motion";

const SignUp = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()
  const handleSignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

  if (!firstName || !lastName || !userName || !email || !password || !confirmPassword) {
    toast.error("All fields are required.")
    return;
  } else if(password !== confirmPassword){
    toast.error("Passwords not match")
    return;
  }

  // Simulate a loading process
  setIsLoading(true);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    //A new user object with profile data
    const user = {
      uid: userCredential.user.uid,
      firstName,
      lastName,
      userName,
      email,
    };

    // Save user data to Firebase Realtime Database
    const userRef = ref(database, `users/${user.uid}`);
    await set(userRef, user);
    // console.log(userCredential);
    toast.success("Account created successfully");
    setTimeout(() => {
      setIsLoading(false);
      router.replace("/signin");
    }, 3000);
  } catch (error) {
    console.error("Registration error:", error);
    toast.error(handleError(error));
    setIsLoading(false);
  }
};

// Function to handle and display authentication errors
const handleError = (error:any) => {
  switch (error.code) {
    case "auth/wrong-password":
      return "Incorrect password";
    case "auth/invalid-email":
      return "Invalid email format";
    case "auth/weak-password":
      return "Password should be at least 6 characters";
    case "auth/email-already-in-use":
      return "Email already in use";
    default:
      return error.message;
  }

};
    return (
        <main className="relative top-[60px] md:top-[75px] px-[5%] py-10 grid grid-cols-1 md:grid-cols-2 gap-6 justify-between bg-white">
            <section className="flex flex-col gap-4 text-[14px] md:text-[16px] font-normal text-dark text-center md:text-left">
                <motion.div 
                className="flex flex-col gap-2 md:gap-4"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Create your free account</h1>
                    <p className="w-full lg:w-[80%]">Do so much more when you create an account on card cafe. Sign up now and start enjoying unlimited features.</p>

                    <div className="flex items-center md:items-start justify-center md:justify-start">
                    <Link href={"/documentation"} className="flex items-center gap-2 hover:gap-4 transition-all delay-150 text-yellow">Read Documentation <FaArrowRightLong /></Link>
                    </div>
                </motion.div>

                <motion.div 
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                >
                    <Image src={"/img/register-img.png"} alt={"register img"} width={400} height={400} loading="lazy"/>
                </motion.div>
            </section>

            <section className="grid place-items-center mt-6 md:mt-0">
            <ToastContainer />
                <form action="" className="w-full sm:w-[95%] xl:w-[70%] grid gap-6 text-[14px] md:text-[16px] text-dark shadow shadow-yellow rounded-xl py-4 sm:py-8 px-5 sm:px-10">
                    <label htmlFor="fname">First Name
                        <input 
                        name="fname" 
                        id="fname" 
                        type="text" 
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}  
                        className="input"
                        required />
                    </label>
                    <label htmlFor="lname">Last Name
                        <input 
                        name="lname" 
                        id="lname" 
                        type="text" 
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)} 
                        className="input"
                        required />
                    </label>
                    <label htmlFor="username">User Name
                        <input 
                        name="username" 
                        id="username" 
                        type="text" 
                        placeholder="User Name"
                        onChange={(e) => setUserName(e.target.value)} 
                        className="input"
                        required />
                    </label>
                    <label htmlFor="email">Email Address
                        <input 
                        name="email" 
                        id="email" 
                        type="email" 
                        placeholder="user@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}  
                        className="input"
                        required />
                    </label>
                    <label htmlFor="password">Password
                        <input 
                        name="password" 
                        id="password" 
                        type="password" 
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}  
                        className="input"
                        required />
                    </label>
                    <label htmlFor="cpassword">Confirm Password
                        <input 
                        name="cpassword" 
                        id="cpassword" 
                        type="password" 
                        placeholder="Enter Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}  
                        className="input"
                        required />
                    </label>

                    <button 
                    className={`bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white flex items-center justify-center ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                    onClick={handleSignUp}
                    >
                        {isLoading ? (
                            <>
                                <LuLoader2  className="animate-spin text-white text-2xl text-center font-semibold" />
                            </>
                        ) : (
                            'Sign Up'
                        )}
                    </button>

                    <p className="text-center">
                        Already a member? <Link href={"signin"} className="text-orange hover:text-yellow transition-all delay-150"> Sign in instead..</Link>
                    </p>

                </form>
            </section>
        </main>
    );
}

export default SignUp;