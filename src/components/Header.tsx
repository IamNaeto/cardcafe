import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { LuLoader2 } from "react-icons/lu";
import { motion } from "framer-motion";

const Header = () => {
  // Manage header bg change on scroll
  const [scrollY, setScrollY] = useState(0);
  const [headerBackground, setHeaderBackground] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  // Manage visibility of nav menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname()
  const router = useRouter()

  const [user] = useAuthState(auth)
  let userLoggedIn

  if (typeof window !== 'undefined') {
    userLoggedIn = localStorage.getItem('user');
  }

  // Update the scroll position state when the user scrolls
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add a scroll event listener and cleanup on component unmount
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine the background color based on the scroll position
  useEffect(() => {
    if (scrollY > 0) {
      // Apply a backdrop blur background when scrolling
      setHeaderBackground('backdrop-blur-md shadow shadow-orange');
    } else {
      // Remove the background color when at the top
      setHeaderBackground('');
    }
  }, [scrollY]);

  //Control nav hide and show
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      signOut(auth)
      localStorage.removeItem('user')
      router.replace("/");
    }, 2000);
  }

  return (
    <main className={`fixed left-0 top-0 w-full z-50 ${headerBackground}`} id="top">
      <nav className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-0 md:px-[5%] py-3">
        <div className="w-full md:w-auto flex items-center justify-between px-[5%] md:px-0">

          <motion.div 
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          >
            <Link href={"/"}>
            <Image src={"/img/logo.png"} width={70} height={70} alt="logo" loading="lazy" className="w-full" />
            </Link>
          </motion.div>
          {isMenuOpen ?
            <RiCloseCircleLine className="text-4xl text-yellow block md:hidden cursor-pointer" onClick={toggleMenu} />
            :
            <HiMenuAlt3 className="text-4xl text-yellow block md:hidden cursor-pointer" onClick={toggleMenu} />
          }
        </div>

        <div className={`${isMenuOpen ? "flex" : "hidden"} w-full md:w-auto backdrop-blur-lg md:backdrop-blur-0 pb-5 md:pb-0 md:flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 text-[14px] md:text-[16px] text-dark font-normal`}>
          <Link href="/" className={pathName === "/" ? "visited:text-orange transition-all delay-150" : "hover:text-yellow transition-all delay-150"} >Home</Link>
          <Link href="/cardlibrary" className={pathName === "/cardlibrary" ? "visited:text-orange transition-all delay-150" : "hover:text-yellow transition-all delay-150"}>Card Library</Link>
          <Link href="/documentation" className={pathName === "/documentation" ? "visited:text-orange transition-all delay-150" : "hover:text-yellow transition-all delay-150"}>Documentation</Link>

          <div className="flex items-center justify-center gap-2 md:gap-4">
            {user && userLoggedIn === 'loggedIn' ? (
              <>
                <button
                  className="px-5 py-3 rounded-md border border-transparent hover:border-yellow hover:shadow-2xl hover:shadow-yellow hover:text-yellow transition-all delay-150 flex items-center justify-center"
                  onClick={handleLogOut}
                >
                  {isLoading ? (
                    <>
                      <LuLoader2 className="animate-spin text-orange text-2xl text-center font-semibold" />
                    </>
                  ) : (
                    'Sign Out'
                  )}
                </button>

                <Link href={"/dashboard"} className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Dashboard</Link>
              </>
            ) : (
              <>
                <Link href={"/signin"} className={pathName === "/signin" ? " visited:text-orange px-5 py-3 rounded-md border border-transparent hover:border-yellow hover:shadow-2xl hover:shadow-yellow transition-all delay-150" : " px-5 py-3 rounded-md border border-transparent hover:border-yellow hover:shadow-2xl hover:shadow-yellow hover:text-yellow transition-all delay-150"}>Sign In</Link>

                <Link href={"/register"} className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Header;