import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { UserContext } from 'context/UserContext';
import { MoviesContext } from 'context/MoviesContext';
import SingleMovie from 'components/shared/SingleMovie';

function Movie() {
  const { movieId } = useParams();
  const { movies, moviesLoading, getSingleMovie } = useContext(MoviesContext);
  const { user } = useContext(UserContext);

  function handleAddMovie(movieId: string) {
    console.log('handling add movie');
  }

  function handleRemoveMovie(movieId: string) {
    console.log('handling remove movie');
  }

  useEffect(() => {
    getSingleMovie(movieId!);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  if (moviesLoading) {
    return <CircularProgress />;
  } else if (movies.length !== 1) {
    return <div>Some error has occurred</div>;
  }

  return <SingleMovie movie={movies[0]} user={user!} onAddMovie={handleAddMovie} onRemoveMovie={handleRemoveMovie} />;
}

export default Movie;
