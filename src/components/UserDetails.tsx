import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ref, update } from 'firebase/database';
import { database } from '@/app/firebase/config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

interface UserDetailsProps {
  updatedUser: {
    uid: any;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    phone: string;
    location: string;
  };
  setUpdatedUser: React.Dispatch<React.SetStateAction<boolean>>,
}

const UserDetails: React.FC<UserDetailsProps> = ({ updatedUser, setUpdatedUser }) => {
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser: any) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditing(true);
  };

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (updatedUser) {
      const userRef = ref(database, `users/${updatedUser.uid}`);
      try {
        await update(userRef, updatedUser);
        toast.success('User details saved successfully.');
        setEditing(false);
      } catch (error) {
        console.error('Error updating user details:', error);
        toast.error('Failed to save user details. Please check console for error.');
      }
    }
  };

  return (
    <motion.main 
    className="w-full xl:w-auto h-full grid gap-4 bg-[#fff] p-5 sm:p-10 rounded-xl text-[14px] md:text-[16px] font-medium"
    initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
    >
      <h1 className="text-[18px] md:text-[24px] font-bold">User Details</h1>

      <form onSubmit={editing ? handleSave : handleEdit} className="grid gap-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label htmlFor="fname">First Name
            <input
              type="text"
              name="firstName"
              value={updatedUser.firstName}
              className="input"
              disabled={!editing}
              id="fname"
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="lname">Last Name
            <input
              type="text"
              name="lastName"
              value={updatedUser.lastName}
              className="input"
              disabled={!editing}
              id="lname"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label htmlFor="email">Email Address
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              className="input cursor-not-allowed"
              readOnly
              id="email"
            />
          </label>

          <label htmlFor="usern">Username
            <input
              type="text"
              name="userName"
              value={updatedUser.userName}
              className="input"
              disabled={!editing}
              id="usern"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label htmlFor="phone">Phone Number
            <input
              type="text"
              name="phone"
              value={updatedUser.phone}
              className="input"
              disabled={!editing}
              id="phone"
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="address">Residential Address
            <input
              type="text"
              name="location"
              value={updatedUser.location}
              className="input"
              disabled={!editing}
              id="address"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="w-full flex items-center justify-center">
          {editing ? (
            <button
              className="w-full bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white"
              type="submit"
            >
              Save
            </button>
          ) : (
            <button
              className="w-full bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white"
              type="submit"
            >
              Edit Profile
            </button>
          )}
        </div>
      </form>
      <ToastContainer />
    </motion.main>
  );
};

export default UserDetails;
