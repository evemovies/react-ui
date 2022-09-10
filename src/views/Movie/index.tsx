import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesContext } from '@/contexts/MoviesContext';
import { UserContext } from '@/contexts/UserContext';
import SingleMovie from './components/SingleMovie';

function Movie() {
  const { getSingleMovie, movies, moviesLoading } = useContext(MoviesContext);
  const { user } = useContext(UserContext);
  const { movieId } = useParams();

  useEffect(() => {
    getSingleMovie(movieId!);
  }, [movieId]);

  const handleAddMovie = (movieId: string) => {
    console.log('adding a movie', movieId);
  };

  const handleRemoveMovie = (movieId: string) => {
    console.log('removing a movie', movieId);
  };

  if (moviesLoading) return <div>Movies Loading</div>;
  if (!movies.length) return <div>No movie, redirect to dashboard</div>;

  return <SingleMovie movie={movies[0]} user={user} onAddMovie={handleAddMovie} onRemoveMovie={handleRemoveMovie} />;
}

export default Movie;
