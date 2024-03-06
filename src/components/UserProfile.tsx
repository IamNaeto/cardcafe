import Nav from "./Nav";
import Profile from "./Profile";
import { useUser } from "@/app/hooks/UserContext";

interface props {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>> ;
    title: string;
}

const UserProfile: React.FC<props> = ({menu, setMenu}) => {
    const { user} = useUser();
    return ( 
        <main className="relative left-0 ml-0  lg:ml-[230px] w-full min-h-screen lg:w-[85%] flex flex-col gap-5 px-[3%] py-4">
            <Nav menu={menu} setMenu={setMenu} title={"Profile"} user={user}/>
            <Profile user={user}/>
        </main>
     );
}
 
export default UserProfile;