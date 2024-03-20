import { motion } from "framer-motion";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
interface userProps {
  user: any
}

const User: React.FC<userProps> = ({ user }) => {
  return (
    <motion.main
      className="w-full xl:w-auto flex flex-col h-full items-center justify-center gap-4 bg-[#fff] p-10 rounded-xl text-[#0F0F0F] text-center"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {user?.img ? (
        <Image src={user?.img} width={200} height={200} alt="user" className="rounded-full" />
      ) : (
        <h1 className="text-8xl font-extrabold px-12 py-14 rounded-full border-4 border-orange text-orange">
          {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
        </h1>
      )}
      <h1 className="text-[18px] md:text-[24px] font-bold">{user?.firstName} {user?.lastName}</h1>
      <p className="text-[14px] md:text-[16px] font-normal">{user?.email}</p>
      <div className="flex items-center">
        <CiLocationOn className="text-2xl" />
        {user?.location ? (
          <p className="text-[12px] md:text-[14px]">{user?.location}</p>
        ) : (
          <p className="text-[12px] md:text-[14px]">No provided address</p>
        )}
      </div>
      <button className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Upload Image</button>

    </motion.main>
  );
}

export default User;