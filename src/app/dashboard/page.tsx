import SideBar from "@/components/SideBar";
import UserDashboard from "@/components/UserDashboard";

const Dashboard = () => {
    return ( 
        <main className=" flex justify-end bg-[#F5F5F5]">
            <SideBar />
            <UserDashboard />
        </main>
     );
}
 
export default Dashboard;