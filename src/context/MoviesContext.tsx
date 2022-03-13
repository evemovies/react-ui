import React, { useEffect, useState } from 'react';
import { IMovie, IMovieSearchParams } from 'models/Movie';
import UserApi from 'api/user';
import MoviesAPI from 'api/movies';

interface IMoviesContext {
  userMovies: IMovie[];
  foundMovies: IMovie[];
  moviesLoading: boolean;
  searchMovies: (params: IMovieSearchParams) => Promise<void>;
  getUserMovies: () => Promise<void>;
  getSingleMovie: (movieId: string) => IMovie;
}

export const MoviesContext = React.createContext<IMoviesContext>({} as IMoviesContext);

const MoviesContextProvider = ({ children }: any) => {
  const [userMovies, setUserMovies] = useState<IMovie[]>([]);
  const [foundMovies, setFoundMovies] = useState<IMovie[]>([]);
  const [userId, setUserId] = useState<string>('0');
  const [moviesLoading, setMoviesLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedUserId = localStorage.getItem('userId') || '0';

    setUserId(savedUserId);
  }, []);

  async function searchMovies(params: IMovieSearchParams) {
    setMoviesLoading(true);

    const { success, data } = await MoviesAPI.searchMovies(params);

    if (success) {
      setFoundMovies(data);
    }

    setMoviesLoading(false);
  }

  async function getUserMovies() {
    setMoviesLoading(true);

    const { success, data } = await UserApi.getUserMovies(userId);

    if (success) {
      setUserMovies(data);
    }

    setMoviesLoading(false);
  }

  function getSingleMovie(movieId: string): IMovie {
    // TODO: improve single movie retrieval
    const userMoviesIds = new Set(userMovies.map(movie => movie.id));
    const allMovies = [...userMovies, ...foundMovies.filter(movie => !userMoviesIds.has(movie.id))];

    return allMovies.find(movie => movie.id === movieId)!;
    // setMoviesLoading(true);
    //
    // const { success, data } = await MoviesAPI.getSingleMovie(movieId);
    //
    // if (success) {
    //   setMovies([data]);
    // }
    //
    // setMoviesLoading(false);
  }

  return (
    <MoviesContext.Provider
      value={{
        userMovies,
        foundMovies,
        moviesLoading,
        getUserMovies,
        searchMovies,
        getSingleMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
