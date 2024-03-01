import Nav from "./Nav";
import RecentGenerates from "./RecentGenerates";
import Statistics from "./Statistics";
import UserInfo from "./UserInfo";

const UserDashboard = () => {
    return ( 
        <main className="relative left-0 w-full lg:w-[78%] xl:w-[85%] flex flex-col gap-5 px-[3%] py-4">
            <Nav />
            <UserInfo />
            <Statistics />
            <RecentGenerates />
        </main>
     );
}
 
export default UserDashboard;