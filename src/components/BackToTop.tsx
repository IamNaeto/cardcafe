import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface BackToTopProps {
  targetId: string;
}

const BackToTop: React.FC<BackToTopProps> = ({ targetId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-[70px] right-2`}
    >
      <a href={`#${targetId}`} onClick={scrollToTop}>
        <IoIosArrowUp className="text-3xl text-white p-1 rounded-[4px] bg-orange cursor-pointer animate-bounce" />
      </a>
    </div>
  );
};

export default BackToTop;