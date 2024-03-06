import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { LuLoader2 } from "react-icons/lu";
import { auth, database } from '@/app/firebase/config'; // Import from config
import { get, ref, set } from 'firebase/database'; // Import database functions

const SignUp = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()
  const handleSignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
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

    // Create a new user object with profile data
    const user = {
      uid: userCredential.user.uid,
      firstName,
      lastName,
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
            <section className="grid text-[14px] md:text-[16px] font-normal text-dark text-center md:text-left">
                <div className="grid gap-4 md:gap-2">
                    <h1 className="text-[36px] sm:text-[38px] md:text-[48px] font-bold">Create your free account</h1>
                    <p className="w-full lg:w-[80%] leading-relaxed tracking-wide">Do so much more when you create an account on card cafe. Sign up now and start enjoying unlimited features.</p>

                    <Link href={"/"} className="flex items-center gap-2 hover:gap-4 transition-all delay-150 text-yellow">Read Documentation <FaArrowRightLong /></Link>
                </div>

                <div className="hidden md:block">
                    <Image src={"/img/register-img.png"} alt={"register img"} width={400} height={400} loading="lazy"/>
                </div>
            </section>

            <section className="grid place-items-center mt-6 md:mt-0">
            <ToastContainer />
                <form action="" className="w-full sm:w-[95%] xl:w-[70%] grid gap-6 text-[14px] md:text-[16px] text-dark shadow shadow-yellow rounded-xl py-8 px-10">
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
                            'Sign In'
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