import { useContext } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { UserContext } from 'context/UserContext';
import MoviesList from 'components/shared/MoviesList';

function Dashboard() {
  const { user, userLoading } = useContext(UserContext);

  if (userLoading) {
    return <CircularProgress />;
  } else if (!user) {
    return <div>Some error has occurred</div>;
  }

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '20px' }}>
      <MoviesList moviesList={user.observableMovies} />
    </Box>
  );
}

export default Dashboard;
