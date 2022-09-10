import { Link } from 'react-router-dom';
import MountAnimationContainer from '@/components/MountAnimationContainer';
import MovieListItem from '../MovieListItem';
import { animations } from './helpers';
import { IMoviesListProps } from './types';
import s from './style.module.scss';

function MoviesList({ movies }: IMoviesListProps) {
  return (
    <div className={s.moviesList}>
      {movies.map((m, index) => (
        <Link key={m.id} to={'/movie/' + m.id}>
          <MountAnimationContainer visible config={{ ...animations, delay: index * 200 }}>
            <MovieListItem movie={m} />
          </MountAnimationContainer>
        </Link>
      ))}
    </div>
  );
}

export default MoviesList;
