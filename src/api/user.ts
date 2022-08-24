import { IMovie } from '@/models/Movie';
import Api, { IAPIResponse } from './api';

const userApi = {
  async getUser(userId: string): Promise<IAPIResponse> {
    const { data } = await Api.get('/api/v1/users/' + userId);

    return data;
  },

  async getUserMovies(userId: string): Promise<IAPIResponse> {
    const { data } = await Api.get(`/api/v1/users/${userId}/movies`);

    return data;
  },

  async addMovie(userId: string, movie: IMovie): Promise<IAPIResponse> {
    const { data } = await Api.post(`/api/v1/users/${userId}/add-movie`, {
      ...movie,
    });

    return data;
  },

  async removeMovie(userId: string, movieId: string): Promise<IAPIResponse> {
    const { data } = await Api.post(`/api/v1/users/${userId}/remove-movie`, {
      id: movieId,
    });

    return data;
  },
};

export default userApi;
