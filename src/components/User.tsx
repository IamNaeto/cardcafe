import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { ref } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { update as updateDatabase } from 'firebase/database';
import { database } from "@/app/firebase/config";
import { HiOutlineCloudUpload } from "react-icons/hi";

interface UserProps {
  user: any | null;
}

const User: React.FC<UserProps> = ({ user }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<any | null>(user);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Logic to choose and update profile picture
  const choosePicture = () => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = 'image/*';
    inputElement.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        setProfilePicture(target.files[0]);
      }
    };
    inputElement.click();
  };

  const storage = getStorage(); // Initializing Firebase Storage

  const handleUpdateProfilePicture = async () => {
    if (profilePicture && userData) {
      try {
        // Upload profile picture to Firebase Storage
        setIsLoading(true);
        const storageReference = storageRef(storage, `profilePictures/${userData.uid}`);
        const snapshot = await uploadBytes(storageReference, profilePicture);
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Update profile picture URL in Firestore
        const userRef = ref(database, `users/${userData.uid}`);
        await updateDatabase(userRef, { img: downloadURL });

        // userData state to manage the user's data,
        setUserData({ ...userData, img: downloadURL });

        toast.success('Profile picture updated successfully.');
        setIsLoading(false);
        setProfilePicture(null);
      } catch (error) {
        console.error('Error updating profile picture:', error);
        toast.error('Failed to update profile picture. Please check console for error.');
      }
    } else {
      toast.error('Please select a profile picture to update.');
    }
  };

  return (
    <motion.main
      className="w-full xl:w-[400px]"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <section
        className="w-full flex flex-col h-full items-center justify-center gap-4 bg-[#fff] p-10 rounded-xl text-[#0F0F0F] text-center"
      >
        {userData?.img ? (
          <Image src={userData?.img} width={500} height={500} alt="user" className="w-[250px] h-[250px] rounded-full shadow-2xl" />
        ) : (
          <h1 className="text-8xl font-extrabold px-12 py-14 rounded-full border-4 border-orange text-orange">
            {userData?.firstName?.charAt(0)}{userData?.lastName?.charAt(0)}
          </h1>
        )}
        <h1 className="text-[18px] md:text-[24px] font-bold">{userData?.firstName} {userData?.lastName}</h1>
        <p className="text-[14px] md:text-[16px] font-normal">{userData?.email}</p>
        <div className="flex items-center">
          <CiLocationOn className="text-2xl" />
          {userData?.location ? (
            <p className="text-[12px] md:text-[14px]">{userData?.location}</p>
          ) : (
            <p className="text-[12px] md:text-[14px]">No provided address</p>
          )}
        </div>
        {profilePicture ? (
          <button
            className="w-full bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white flex items-center justify-center gap-1"
            onClick={handleUpdateProfilePicture}
          >
            <HiOutlineCloudUpload className="text-2xl animate-bounce" />
            {isLoading ? (
              "Uploading..."
            ) : (
              "Upload Picture"
            )}
          </button>
        ) : (
          <button
            className="w-full bg-white border border-orange hover:border-yellow hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-orange flex items-center justify-center gap-1"
            onClick={choosePicture}
          >
            Change Image</button>
        )}
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
            {userData?.img ? (
              <Image src={userData?.img} width={500} height={500} alt="user" className="rounded-full w-full h-full" />
            ) : (
              <div className="w-full h-full text-9xl font-extrabold rounded-full border-4 border-orange text-orange shadow-yellow shadow-2xl text-center flex items-center justify-center">
                {userData?.firstName?.charAt(0)}{userData?.lastName?.charAt(0)}
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
      </section>
    </motion.main>
  );
}

export default User;