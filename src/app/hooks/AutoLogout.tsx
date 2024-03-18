import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

const AutoLogout: React.FC = () => {
  const router = useRouter();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    const resetTimer = () => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        console.log('Auto logout triggered');
        signOut(auth);
        localStorage.removeItem('user');
        router.replace('/signin'); // Redirect to signin page after logout
      }, 5 * 1000); // 5 seconds in milliseconds
      setTimeoutId(timerId);
      console.log('Timer reset');
    };

    const handleUserActivity = () => {
      console.log('User activity detected');
      resetTimer();
    };

    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keypress', handleUserActivity);

    resetTimer(); // Start initial timer on component mount

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keypress', handleUserActivity);
    };
  }, [timeoutId, router]);

  return null; // This component doesn't render anything visible
};

export default AutoLogout;
