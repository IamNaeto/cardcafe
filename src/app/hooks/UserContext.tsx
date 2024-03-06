import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { get, getDatabase, ref } from 'firebase/database';
import { auth } from '@/app/firebase/config';

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

  // Check for localStorage and get userData if there is any
  const handleUserData = () => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('userData');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsLoading(false);
      }
    }
  };

  //handleUserData within useEffect
  useEffect(() => {
    handleUserData(); // Load user data from localStorage if available

    // Fetch user data from database if not in localStorage or user changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const userRef = ref(getDatabase(), `users/${currentUser.uid}`);
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              setUser(userData);
              // Save fetched data to localStorage
              localStorage.setItem('userData', JSON.stringify(userData));
            } else {
              console.warn('User data not found in database');
            }
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
      }
    });

    return unsubscribe; // Clean up event listener on unmount
  }, [auth]);

  // Cleanup function to remove user data from localStorage when unmounting
  useEffect(() => {
    return () => localStorage.removeItem('userData');
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
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
