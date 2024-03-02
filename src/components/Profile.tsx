import User from "./User";
import UserDetails from "./UserDetails";

const Profile = () => {
    return ( 
        <main className="flex flex-col xl:flex-row items-center gap-10">
            <User />
            <UserDetails />
        </main>
     );
}
 
export default Profile;