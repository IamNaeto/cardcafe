import Nav from "./Nav";
import CardDetails from "./CardDetails";
import Statistics from "./Statistics";
import UserInfo from "./UserInfo";

interface props {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>> ;
    title: string;
}

const UserDashboard: React.FC<props> = ({ menu, setMenu }) => {
    return ( 
        <main className="relative left-0 ml-0  lg:ml-[230px] w-full min-h-screen lg:w-[85%] flex flex-col gap-5 px-[3%] py-4">
            <Nav menu={menu} setMenu={setMenu} title={"Dashbord"}/>
            <UserInfo />
            <Statistics />
            <CardDetails title={"Recent Generated Cards"} type={"Date Generated"} />
        </main>
     );
}
 
export default UserDashboard;