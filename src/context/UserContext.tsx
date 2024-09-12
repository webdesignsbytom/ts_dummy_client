import React, { createContext, useState, useContext, ReactNode } from 'react';
// Models
import { TempUserModel, UserModel } from '../models/user/UserModels';

interface UserContextProps {
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<UserModel | null>(TempUserModel);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
