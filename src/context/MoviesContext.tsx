import React, { useEffect, useState } from 'react';
import { IMovie, IMovieSearchParams } from 'models/Movie';
import UserApi from 'api/user';
import MoviesAPI from 'api/movies';

interface IMoviesContext {
  movies: IMovie[];
  moviesLoading: boolean;
  getMovies: (params?: IMovieSearchParams) => Promise<void>;
  getSingleMovie: (movieId: string) => Promise<void>;
}

export const MoviesContext = React.createContext<IMoviesContext>({} as IMoviesContext);

const MoviesContextProvider = ({ children }: any) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [userId, setUserId] = useState<string>('0');
  const [moviesLoading, setMoviesLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedUserId = localStorage.getItem('userId') || '0';

    setUserId(savedUserId);
  }, []);

  async function getMovies(params?: IMovieSearchParams) {
    setMoviesLoading(true);

    const fetchMoviesMethod = params ? MoviesAPI.searchMovies.bind(null, params) : UserApi.getUserMovies.bind(null, userId);

    const { success, data } = await fetchMoviesMethod();

    if (success) {
      setMovies(data);
    }

    setMoviesLoading(false);
  }

  async function getSingleMovie(movieId: string) {
    setMoviesLoading(true);

    const { success, data } = await MoviesAPI.getSingleMovie(movieId);

    if (success) {
      setMovies([data]);
    }

    setMoviesLoading(false);
  }

  return (
    <MoviesContext.Provider
      value={{
        movies,
        moviesLoading,
        getMovies,
        getSingleMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
