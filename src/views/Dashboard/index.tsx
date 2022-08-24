import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';
import MoviesList from '@/components/movies/MoviesList';

function Dashboard() {
  const { user } = useContext(UserContext);

  return <MoviesList movies={user.observableMovies} />;
}

export default Dashboard;
