import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";

interface ProtectedRouteProps {
    children: React.ReactNode;
  }

const RedirectOnAuth: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
        const [user] = useAuthState(auth);
        const router = useRouter();
    
        // Logic to prevent going back to the signup page once user is authenticated
        useEffect(() => {
            let localUser;
            if (user === null && localUser === null) {
                    return
            }
            else if (typeof window !== 'undefined') {
                localUser = localStorage.getItem("user");
                if (user && localUser === 'loggedIn') {
                    setTimeout(() => {
                        setIsLoading(true)
                    router.replace("/generate")
                    }, 2000);
                }
            }
            setIsLoading(false)
        }, [user, router]);
    
        // Display loader only while loading
        if (isLoading) {
            return (
                <div className="w-full h-screen flex items-center justify-center">
                    <LuLoader2
                        className="animate-spin text-orange text-7xl font-semibold cursor-not-allowed text-center"
                    />
                </div>
            );
        }
        
        return children;
}
 
export default RedirectOnAuth;