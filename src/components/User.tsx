import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

interface userProps {
  user: any
}

const User: React.FC<userProps> = ({ user }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleProfilePictureUpload = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    toast.info("Coming soon...")
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
      <button
        className="w-full bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white"
      // onClick={handleProfilePictureUpload}
      >Change Image</button>
      <button
        className="w-full bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white"
        onClick={openModal}
      >View Image</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 backdrop-blur-3xl z-50"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] text-center"
        >
          {user?.img ? (
            <Image src={user?.img} width={500} height={500} alt="user" className="rounded-full w-full h-full" />
          ) : (
            <div className="w-full h-full text-9xl font-extrabold rounded-full border-4 border-orange text-orange shadow-yellow shadow-2xl text-center flex items-center justify-center">
              {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
            </div>
          )}

          <button
            className="text[14px] md:text-[16px] px-8 py-2 bg-gradient-to-b from-orange to-yellow text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150 cursor-pointer mt-5"
            onClick={closeModal}
          >
            Close
          </button>
        </motion.div>
      </Modal>

      <ToastContainer />
    </motion.main>
  );
}

export default User;