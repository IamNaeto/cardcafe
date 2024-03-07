import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initial loading state

  useEffect(() => {
    if (user === undefined) {
      // Initial check for undefined user (loading state)
      setIsLoading(true);
      return;
    }

    let localUser;

    if (typeof window !== 'undefined') {
      localUser = localStorage.getItem("user");
  }

    // Handle both initial loading and subsequent user state changes
    if (user === null && localUser === null) {
      router.replace("/signin");
      
    } else {
      setIsLoading(false); // Set loading to false when user is authenticated or not
    }
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

  // Render children only if user is authenticated or still loading
  return children;
};

export default PrivateRoute;
