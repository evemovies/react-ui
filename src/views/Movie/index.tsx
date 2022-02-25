import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMovie } from 'models/Movie';
import { UserContext } from 'context/UserContext';
import { MoviesContext } from 'context/MoviesContext';
import SingleMovie from 'components/shared/SingleMovie';

function Movie() {
  const { movieId } = useParams();
  const { getSingleMovie } = useContext(MoviesContext);
  const { user, addMovie, removeMovie } = useContext(UserContext);
  const [movie, setMovie] = useState<IMovie>();

  function handleAddMovie() {
    addMovie(movie!);
  }

  function handleRemoveMovie() {
    removeMovie(movie!.id);
  }

  useEffect(() => {
    const movie = getSingleMovie(movieId!);
    setMovie(movie);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  // TODO: add an endpoint to get single movie from the API
  if (!movie) return <div>Some error has occurred</div>;

  return <SingleMovie movie={movie} user={user!} onAddMovie={handleAddMovie} onRemoveMovie={handleRemoveMovie} />;
}

export default Movie;
