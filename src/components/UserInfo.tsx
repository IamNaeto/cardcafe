import Image from "next/image";
interface props {
    user: any
}
const UserInfo:React.FC<props> = ({user}) => {
    return ( 
        <main className="flex flex-col md:flex-row items-center justify-between gap-5 text-[#0F0F0F] p-5 rounded-xl bg-[#fff]">
            <section className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Image src={"/img/user-avatar.png"} width={70} height={70} alt="user avatar"/>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[16px] md:text-[18px] font-bold text-center md:text-left">Hello, {user?.firstName} {user?.lastName}</h1>
                    <p className="text-[12px] md:text-[14px] font-normal text-center md:text-left">Welcome back</p>
                </div>
            </section>

            <section>
                <p className="text-[12px] md:text-[14px] font-normal text-center md:text-left">Your last login was on</p>
                <h1 className="text-[16px] md:text-[18px] font-bold text-center md:text-left">Wednesday 7th December 2022</h1>
            </section>
        </main>
     );
}
 
export default UserInfo;