import Image from "next/image";
interface cardFrontProps{
    cardBg: string;
    generatedCardNumber: string | null;
    showGeneratedDetails: boolean;
    getCardImage: any;
    user: any


}
const CardFront:React.FC<cardFrontProps> = ({ cardBg, generatedCardNumber, showGeneratedDetails, getCardImage, user }) => {
    return (
        <main id="card-front" className={`bg-gradient-to-br ${cardBg} p-4 sm:p-6 rounded-2xl min-h-[300px] text-white relative`}>
            <div className="flex items-end justify-end">
                <Image src={"/img/cardicon.png"} width={50} height={50} alt="cardicon" loading="lazy" className="mb-4" />
            </div>

            <div className="grid gap-8">
                <h1 className="text-[24px] md:text-[28px] font-medium">{user?.firstName} {user?.lastName}</h1>
                <h2 className="text-[18px] md:text-[22px]">{generatedCardNumber ? generatedCardNumber : 'xxxx    xxxx    xxxx    xxxx'}</h2>
                <Image src={"/img/cardchip.png"} width={50} height={50} alt="cardicon" loading="lazy" />
            </div>

            {showGeneratedDetails && (
                <div className="flex items-center justify-between gap-4 text-white mt-5">
                   <p>Expiry Date: {new Date(new Date().setFullYear(new Date().getFullYear() + 4)).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                    <Image src={getCardImage()} width={50} height={50} alt="" loading="lazy" />
                </div>
            )}
        </main>
    );
}

export default CardFront;