import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseCircleLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Header = () => {
  // Manage header bg change on scroll
  const [scrollY, setScrollY] = useState(0);
  const [headerBackground, setHeaderBackground] = useState('');

  // Manage visibility of nav menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname()

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

  return (
    <main className={`fixed left-0 top-0 w-full z-50 ${headerBackground}`} id="header">
      <nav className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-0 md:px-[5%] py-3">
        <div className="w-full md:w-auto flex items-center justify-between px-[5%] md:px-0">
          <Link href={"/"}>
            <Image src={"/img/logo.png"} width={60} height={60} alt="logo" loading="lazy" className="w-full" />
          </Link>
          {isMenuOpen ?
            <RiCloseCircleLine className="text-4xl text-yellow block md:hidden cursor-pointer" onClick={toggleMenu} />
            :
            <HiMenuAlt3 className="text-4xl text-yellow block md:hidden cursor-pointer" onClick={toggleMenu} />
          }
        </div>

        <div className={`${isMenuOpen ? "flex" : "hidden"} w-full md:w-auto backdrop-blur-lg md:backdrop-blur-0 pb-5 md:pb-0 md:flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 text-[14px] md:text-[16px] text-dark font-normal`}>
          <Link href="/" className={pathName === "/" ? "visited:text-orange transition-all delay-150" : "hover:text-yellow transition-all delay-150" } >Home</Link>
          <Link href="/cardlibrary" className={pathName === "/cardlibrary" ? "visited:text-orange transition-all delay-150" : "hover:text-yellow transition-all delay-150" }>Card Library</Link>
          <Link href="/documentation" className={pathName === "/documentation" ? "visited:text-orange transition-all delay-150" : "hover:text-yellow transition-all delay-150" }>Documentations</Link>

          <div className="flex items-center justify-center gap-2 md:gap-4">
            <Link href={"/signin"} className={pathName === "/signin" ? " visited:text-orange px-5 py-3 rounded-md border border-transparent hover:border-yellow hover:shadow-2xl hover:shadow-yellow transition-all delay-150" :  " px-5 py-3 rounded-md border border-transparent hover:border-yellow hover:shadow-2xl hover:shadow-yellow hover:text-yellow transition-all delay-150" }>Sign in</Link>
            <Link href={"/register"} className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Register</Link>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Header;