import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from 'next/navigation';
import { LuLoader2 } from "react-icons/lu";
import { useState } from "react";

interface ControlBtnProps {
    caption: string;
}

const ControlBtn: React.FC<ControlBtnProps> = ({ caption }) => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const [user] = useAuthState(auth);

    let userLoggedIn: string | null;

    if (typeof window !== 'undefined') {
        userLoggedIn = localStorage.getItem('user');
    }

    const handleGetStarted = () => {
        setIsLoading(true);

        if (user && userLoggedIn === 'loggedIn') {
            setTimeout(() => {
                setIsLoading(false);
                router.replace("/generate");
            }, 1000);
        } else {
            setTimeout(() => {
                setIsLoading(false);
                router.replace("/signin");
            }, 1000);
        }
    };

    return (
        <main className="flex items-center md:items-start justify-center md:justify-start">
            <button
                className={`bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 w-[200px] px-5 py-3 rounded-md text-white flex items-center justify-center ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={handleGetStarted}
            >
                {isLoading ? (
                    <>
                        <LuLoader2 className="animate-spin text-white text-2xl text-center font-semibold" />
                    </>
                ) : (
                    caption
                )}
            </button>
        </main>
    );
};

export default ControlBtn;
