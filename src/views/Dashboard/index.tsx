import { useContext, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { MoviesContext } from 'context/MoviesContext';
import MoviesList from 'components/shared/MoviesList';

function Dashboard() {
  const { userMovies, getUserMovies, moviesLoading } = useContext(MoviesContext);

  useEffect(() => {
    getUserMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (moviesLoading) return <CircularProgress />;
  else if (!userMovies) return <div>Some error has occurred</div>;

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '20px' }}>
      <MoviesList moviesList={userMovies} />
    </Box>
  );
}

export default Dashboard;
