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

  // Store the fetched user data in localStorage
  if (typeof window !== 'undefined') { // Check if in browser environment
    const storedUser = localStorage.getItem('userData');

  useEffect(() => {
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoading(false);
    } else {
      const currentUser = auth.currentUser;

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
    }
  }, [auth]);
}

  useEffect(() => {
    // Cleanup function to remove user data from localStorage when unmounting
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
