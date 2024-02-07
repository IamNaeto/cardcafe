import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  // Manage header bg change on scroll
  const [scrollY, setScrollY] = useState(0);
  const [headerBackground, setHeaderBackground] = useState('');

  // Manage visibility of nav menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <main className={`fixed top-0 w-full z-50 ${headerBackground}`}>
      <nav className="w-full flex items-center justify-between px-[5%] py-3">
        <Link href={"/"}>
          <Image src={"/img/logo.png"} width={100} height={100} alt="logo" loading="lazy" />
        </Link>

        <div className="flex items-center justify-center gap-10 text-[16px] text-dark font-normal">
          <a href="" className="hover:text-yellow transition-all delay-150">Home</a>
          <a href="" className="hover:text-yellow transition-all delay-150">Card Library</a>
          <a href="" className="hover:text-yellow transition-all delay-150">Documentations</a>

          <div className="flex items-center justify-center gap-4">
            <Link href={"/signin"} className="px-5 py-3 rounded-md border border-transparent hover:border-yellow hover:shadow-2xl hover:shadow-yellow transition-all delay-150">Sign in</Link>
            <Link href={"/register"} className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Register</Link>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Header;