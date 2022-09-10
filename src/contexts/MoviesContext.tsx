import React, { useState } from 'react';
import { IMovie, IMovieSearchParams } from '@/models/Movie';
import MoviesAPI from '@/api/movies';

interface IMoviesContext {
  moviesLoading: boolean;
  movies: IMovie[];
  getSingleMovie: (movieId: string) => Promise<void>;
  userMovies?: IMovie[];
  foundMovies?: IMovie[];
  searchMovies?: (params: IMovieSearchParams) => Promise<void>;
  getUserMovies?: () => Promise<void>;
}

export const MoviesContext = React.createContext<IMoviesContext>({} as IMoviesContext);

const MoviesContextProvider = ({ children }: any) => {
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getSingleMovie = async (movieId: string) => {
    setMoviesLoading(true);

    const { success, data } = await MoviesAPI.getSingleMovie(movieId);

    if (success && data) {
      setMovies([data]);
    }

    setMoviesLoading(false);
  };

  return (
    <MoviesContext.Provider
      value={{
        moviesLoading,
        movies,
        getSingleMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
