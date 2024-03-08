import Image from "next/image";
import { getAuth, User } from "firebase/auth";
import firebase from "firebase/compat/app";
import { DateTimeFormatOptions } from 'intl';

interface Props {
  user: any | User | null;
}

const UserInfo: React.FC<Props> = ({ user }) => {
  const auth = getAuth();

  // Handle potential null user and format last login date
  const lastLoginDate: string = user?.metadata?.lastSignInTime
    ? formatDate(user.metadata.lastSignInTime)
    : formatDate(new Date());

  function formatDate(timestamp: firebase.firestore.Timestamp | Date): string {
    const date = new Date(timestamp instanceof Date ? timestamp : timestamp.toDate());
    const options: DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <main className="flex flex-col md:flex-row items-center justify-between gap-5 text-[#0F0F0F] p-5 rounded-xl bg-[#fff]">
      <section className="flex flex-col md:flex-row items-center justify-center gap-4">
        {user?.img ? (
          <Image src={user?.img} width={70} height={70} alt="user" className="rounded-full" />
        ) : (
          <h1 className="text-[34px] font-bold py-2 px-3 rounded-full border-[3px] border-orange text-orange">
            {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
          </h1>
        )}
        <div className="flex flex-col gap-2">
          <h1 className="text-[16px] md:text-[18px] font-bold text-center md:text-left">Hello, {user?.firstName} {user?.lastName}</h1>
          <p className="text-[12px] md:text-[14px] font-normal text-center md:text-left">Welcome back</p>
        </div>
      </section>

      <section>
        <p className="text-[12px] md:text-[14px] font-normal text-center md:text-left">Your last login was on</p>
        <h1 className="text-[16px] md:text-[18px] font-bold text-center md:text-left">{lastLoginDate}</h1>
      </section>
    </main>
  );
};

export default UserInfo;
