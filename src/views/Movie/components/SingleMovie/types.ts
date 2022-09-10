import { IMovie } from '@/models/Movie';
import { IUser } from '@/models/User';

export interface ISingleMovieProps {
  movie: IMovie;
  user: IUser;
  onAddMovie: (movieId: string) => void;
  onRemoveMovie: (movieId: string) => void;
}
