import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { IMovie } from 'models/Movie';
import { IMoviesListProps } from './types';

function MoviesList({ moviesList }: IMoviesListProps) {
  const navigate = useNavigate();

  function handleMovieClick(movieId: IMovie['id']) {
    navigate(`/movie/${movieId}`);
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gridAutoFlow="columns"
      gap={4}
      alignItems="start"
      alignContent="start"
      sx={{ width: '100%', height: '100%' }}
    >
      {moviesList.map(movie => (
        <Box key={movie.id} onClick={() => handleMovieClick(movie.id)}>
          <Card>
            <CardMedia component="img" height="200" image={movie.posterUrl} />
            <CardContent>
              <Box sx={{ width: '200px' }}>{movie.title}</Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

export default MoviesList;
