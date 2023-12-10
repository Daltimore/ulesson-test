import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserContextProps {
  children: ReactNode;
}

interface UserContextValue {
  isLoggedIn: boolean;
  login: () => void;
  claimDailyReward: () => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasClaimedDailyReward, setHasClaimedDailyReward] = useState(false);

  useEffect(() => {
    // Check user's login status from your authentication system
    // For demonstration purposes, set it to true
    setIsLoggedIn(true);
  }, []);

  const login = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const claimDailyReward = () => {
    // Perform logic to grant daily reward
    // For example, update user's balance, grant items, etc.
    setHasClaimedDailyReward(true);
  };

  const value: UserContextValue = {
    isLoggedIn,
    login,
    claimDailyReward,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextValue => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
