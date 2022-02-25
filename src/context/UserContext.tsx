import React, { useState, useEffect } from 'react';
import UserAPI from 'api/user';
import { IMovie } from 'models/Movie';
import { IUser } from 'models/User';

interface IUserContext {
  user?: IUser;
  userLoading: boolean;
  addMovie: (movie: IMovie) => Promise<void>;
  removeMovie: (movieId: string) => Promise<void>;
}

export const UserContext = React.createContext<IUserContext>({} as IUserContext);

const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>();
  const [userLoading, setUserLoading] = useState<boolean>(true);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      getUser(userId);
    }
  }, []);

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

  async function addMovie(movie: IMovie) {
    const { success, data } = await UserAPI.addMovie(user!.id, movie);

    if (success) {
      setUser(data);
    }
  }

  async function removeMovie(movieId: string) {
    const { success, data } = await UserAPI.removeMovie(user!.id, movieId);

    if (success) {
      setUser(data);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        userLoading,
        addMovie,
        removeMovie,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
