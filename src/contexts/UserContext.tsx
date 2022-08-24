import React, { useState, useEffect } from 'react';
import { IUser } from '@/models/User';
import { IMovie } from '@/models/Movie';
import UserAPI from '@/api/user';

interface IUserContext {
  user: IUser;
  userLoading: boolean;
  addMovie?: (movie: IMovie) => Promise<void>;
  removeMovie?: (movieId: string) => Promise<void>;
}

export const UserContext = React.createContext<IUserContext>({} as IUserContext);

const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      getUser(userId);
    }
  }, []);

  const getUser = async (userId: string) => {
    setUserLoading(true);

    const { success, data } = await UserAPI.getUser(userId);

    if (success) {
      setUser(data);
    }

    setUserLoading(true);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
