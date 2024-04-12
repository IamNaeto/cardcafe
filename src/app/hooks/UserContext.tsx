import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { ref, getDatabase, onValue } from 'firebase/database';
import { auth } from '@/app/firebase/config';
import { LuLoader2 } from 'react-icons/lu';

interface UserContextProps {
  children: ReactNode;
}

interface UserContextValue {
  user: User | null;
  isLoading: boolean;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data from database
  const fetchUserData = (uid: string) => {
    const userRef = ref(getDatabase(), `users/${uid}`);
    onValue(userRef, (snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setUser(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
      } else {
        console.warn('User data not found in database');
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    // Load user data from localStorage if available
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoading(false);
    }

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        fetchUserData(currentUser.uid);
      } else {
        setIsLoading(false);
      }
    });

    return unsubscribe; // Clean up event listener on unmount
  }, []);

  useEffect(() => {
    return () => localStorage.removeItem('userData');
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center bg-white text-center">
          <LuLoader2
            className="animate-spin text-orange text-7xl font-semibold text-center"
          />
        </div>
      ) : (
        <>{children}</>
      )}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
