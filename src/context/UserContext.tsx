import React, { useState, useEffect } from 'react';
import UserAPI from 'api/user';
import { IUser } from 'models/User';

interface IUserContext {
  user?: IUser;
  userLoading: boolean;
}

export const UserContext = React.createContext<IUserContext>({} as IUserContext);

const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>();
  const [userLoading, setUserLoading] = useState<boolean>(true);

  async function getUser(userId: string) {
    setUserLoading(true);
    const { success, data } = await UserAPI.getUser(userId);

    if (success) {
      const formattedUser: IUser = {
        ...data,
        observableMovies: data.observableMovies.map((movie: any) => ({ ...movie, id: movie._id || movie.id })),
      };

      setUser(formattedUser);
    }

    setUserLoading(false);
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      getUser(userId);
    }
  }, []);

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
