import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
// Models
import { TempUserModel, UserModel } from '../models/user/UserModels';
import LoggedInUser from '../utils/LoggedInUser';
import client from '../api/client';
import { GET_LOGGED_IN_USER_API, HOME_PAGE_URL } from '../utils/Constants';

interface UserContextProps {
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
  hasAgreedToCookies: boolean;
  setHasAgreedToCookies: (value: boolean) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<UserModel | null>(TempUserModel);
  const [hasAgreedToCookies, setHasAgreedToCookies] = useState<boolean>(false);

  useEffect(() => {
    const decodedUserData = LoggedInUser();
    console.log(
      'DecodedUserData >>> useEffect() UserContext: ',
      decodedUserData
    );

    if (decodedUserData !== null) {
      const userId = decodedUserData.id;

      client
        .get(`${GET_LOGGED_IN_USER_API}/${userId}`)
        .then((res) => {
          setUser(res.data.data.user);
        })
        // .then(() => navigateToPage(HOME_PAGE_URL))

        .catch((err) => {
          console.error('Unable to retrieve user data', err);
        });
    }

    const cookie = localStorage.getItem('CookiePolicy');
    console.log('cookie', cookie);
    if (cookie) {
      setHasAgreedToCookies(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, hasAgreedToCookies, setHasAgreedToCookies }}>
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
