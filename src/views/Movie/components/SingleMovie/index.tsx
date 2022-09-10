import { useMemo } from 'react';
import { Card } from 'antd';
import { ISingleMovieProps } from './types';

const { Meta } = Card;

function SingleMovie({ movie, user, onAddMovie, onRemoveMovie }: ISingleMovieProps) {
  const renderMovieAction = useMemo(() => {
    const movieInUserLibrary = user.observableMovies.find(m => m.id === movie.id);

    if (movieInUserLibrary) return <div onClick={() => onRemoveMovie(movie.id)}>Remove</div>;

    return <div onClick={() => onAddMovie(movie.id)}>Add</div>;
  }, [movie, user]);

  return (
    <Card hoverable style={{ width: 240 }} cover={<img src={movie.posterUrl} alt={movie.title} />} actions={[renderMovieAction]}>
      <Meta title={movie.title} />
    </Card>
  );
}

export default SingleMovie;
