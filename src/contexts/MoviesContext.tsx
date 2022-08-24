import React, { useState } from 'react';
import { IMovie, IMovieSearchParams } from '@/models/Movie';
import MoviesAPI from '@/api/movies';

interface IMoviesContext {
  userMovies: IMovie[];
  foundMovies?: IMovie[];
  moviesLoading: boolean;
  searchMovies?: (params: IMovieSearchParams) => Promise<void>;
  getUserMovies?: () => Promise<void>;
  getSingleMovie?: (movieId: string) => IMovie;
}

export const MoviesContext = React.createContext<IMoviesContext>({} as IMoviesContext);

const MoviesContextProvider = ({ children }: any) => {
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [userMovies, setUserMovies] = useState<IMovie[]>([]);

  return (
    <MoviesContext.Provider
      value={{
        userMovies,
        moviesLoading,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
