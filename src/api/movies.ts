import { IMovieSearchParams } from 'models/Movie';
import Api, { IAPIResponse } from './api';

const userApi = {
  async searchMovies(params: IMovieSearchParams): Promise<IAPIResponse> {
    const data = await Api.get(`/api/v1/movies/search-movie?title=${params.title}language=${params.language}&year=${params.year}`);

    return data.data;
  },

  async getSingleMovie(movieId: string): Promise<IAPIResponse> {
    const data = await Api.get(`/api/v1/movies/${movieId}`);

    return data.data;
  },
};

export default userApi;
