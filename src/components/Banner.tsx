import Image from "next/image";
const Banner = () => {
    return (
        <main className="relative py-4 grid place-items-center overflow-clip">
            <Image src={"/img/sample-banner.png"} width={1500} height={1500} alt="banner" className="w-full cardsamples" />
        </main>
    );
}

export default Banner;