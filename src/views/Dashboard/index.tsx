import { useContext, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { MoviesContext } from 'context/MoviesContext';
import MoviesList from 'components/shared/MoviesList';

function Dashboard() {
  const { movies, getMovies, moviesLoading } = useContext(MoviesContext);

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (moviesLoading) {
    return <CircularProgress />;
  } else if (!movies) {
    return <div>Some error has occurred</div>;
  }

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '20px' }}>
      <MoviesList moviesList={movies} />
    </Box>
  );
}

export default Dashboard;
