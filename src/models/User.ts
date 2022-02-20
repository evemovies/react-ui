import { IMovie } from './Movie';

export interface IUser {
  id: string;
  created: number;
  username: string;
  lastActivity: number;
  totalMovies: number;
  language: 'ru' | 'en';
  observableMovies: IMovie[];
}
