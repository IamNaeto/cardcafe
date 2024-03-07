import User from "./User";
import UserDetails from "./UserDetails";

interface profileProps{
    user: any
}
 
const Profile:React.FC<profileProps> = ({user}) => {
    return ( 
        <main className="flex flex-col xl:flex-row items-center gap-5">
            <User user={user}/>
            <UserDetails user={user}/>
        </main>
     );
}
 
export default Profile;