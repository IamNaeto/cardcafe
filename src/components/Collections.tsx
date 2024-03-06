import Image from "next/image";
import Link from "next/link";
import { RiDownloadCloudLine } from "react-icons/ri";
import { BiMessageRoundedDots } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { collectionsData } from "./CollectionsData";
import { useState } from "react";

const Collections = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseOver = (index:any) => {
    setHoveredImage(index);
  };

  const handleMouseOut = () => {
    setHoveredImage(null);
  };

  return (
    <main className="relative top-0 px-[5%] border-dark py-10 bg-white grid gap-6 text-dark text-[13px] sm:text-[14px] md:text-[16px] font-medium">
      <h1 className="text-[34px] sm:text-[36px] md:text-[46px] font-bold text-center">
        Our Card Collections
      </h1>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-between">
        {collectionsData.map((collections, index) => (
          <div
            key={index}
            className="bg-[#F8F8F8] p-2 rounded-xl max-h-[400px] flex flex-col justify-between"
          >
            <div
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              <Image
                src={
                  hoveredImage === index
                    ? collections.cardBack
                    : collections.cardFront
                }
                width={600}
                height={600}
                alt="cardsamples"
                loading="lazy"
                className="w-full transition-all duration-150 ease-in-out"
              />
            </div>

            <div className="grid gap-4 px-2 py-4 md:p-4 border-t border-t-[#C2C2C2]">
              <div className="flex items-center justify-between gap-1 sm:gap-2">
                <p className="flex items-center justify-center gap-1 sm:gap-2">
                  <RiDownloadCloudLine className="text-[14px] sm:text-lg md::text-2xl" />{" "}
                  {collections.downloads}
                </p>
                <p className="flex items-center justify-center gap-1 sm:gap-2">
                  <BiMessageRoundedDots className="text-[14px] sm:text-lg md::text-2xl" />{" "}
                  {collections.msg}
                </p>
                <p className="flex items-center justify-center gap-1 sm:gap-2">
                  <AiOutlineEye className="text-[14px] sm:text-lg md::text-2xl" />{" "}
                  {collections.seen}
                </p>
              </div>

              <div className="w-full flex items-center justify-center">
                <Link
                  href={"/documentation"}
                  className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 w-[95%] px-3 sm:px-5 py-2 sm:py-3 rounded-md text-white text-center"
                >
                  View Card
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Collections;
