import { IMovie } from 'models/Movie';
import Api, { IAPIResponse } from './api';

const userApi = {
  async getUser(userId: string): Promise<IAPIResponse> {
    const data = await Api.get('/api/v1/users/' + userId);

    return data.data;
  },

  async getUserMovies(userId: string): Promise<IAPIResponse> {
    const data = await Api.get(`/api/v1/users/${userId}/movies`);

    return data.data;
  },

  async addMovie(userId: string, movie: IMovie) {
    const data = await Api.post(`/api/v1/users/${userId}/add-movie`, {
      ...movie,
    });

    return data.data;
  },

  async removeMovie(userId: string, movieId: string) {
    const data = await Api.post(`/api/v1/users/${userId}/remove-movie`, {
      movieId,
    });
  },
};

export default userApi;
