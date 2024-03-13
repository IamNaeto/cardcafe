import React, { useEffect } from 'react';
import Nav from './Nav';
import CardDetails from './CardDetails';
import Statistics from './Statistics';
import UserInfo from './UserInfo';
import { useUser } from '../app/hooks/UserContext';

interface UserDashboardProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ menu, setMenu }) => {
  const { user } = useUser();

  return (
    <main className="relative left-0 ml-0  lg:ml-[230px] w-full min-h-screen lg:w-[85%] flex flex-col gap-5 px-[3%] py-4">
      <Nav menu={menu} setMenu={setMenu} title={'Dashbord'} user={user} />
      <UserInfo user={user} />
      <Statistics user={user} />
      <CardDetails title={'Recent Generated Cards'} type={'Date Generated'} cardType={'generatedCards'} user={user} />
    </main>
  );
};

export default UserDashboard;
