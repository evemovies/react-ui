import MovieListItem from '../MovieListItem';
import { IMoviesListProps } from './types';
import s from './style.module.scss';

function MoviesList({ movies }: IMoviesListProps) {
  return (
    <div className={s.moviesList}>
      {movies.map(m => (
        <MovieListItem key={m.id} movie={m} />
      ))}
    </div>
  );
}

export default MoviesList;
