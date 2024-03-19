import { useState } from "react";
import User from "./User";
import UserDetails from "./UserDetails";

interface profileProps{
    user: any
}
 
const Profile:React.FC<profileProps> = ({user}) => {
    const [updatedUser, setUpdatedUser] = useState({ ...user });
    return ( 
        <main className="flex flex-col xl:flex-row items-center gap-5">
            <User user={updatedUser}/>
            <UserDetails updatedUser={updatedUser} setUpdatedUser={setUpdatedUser}/>
        </main>
     );
}
 
export default Profile;