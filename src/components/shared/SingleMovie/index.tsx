import { useMemo } from 'react';
import { Box, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { ISingleMovieProps } from './types';

function SingleMovie({ movie, user, onAddMovie, onRemoveMovie }: ISingleMovieProps) {
  const userMoviesIds = useMemo(() => user.observableMovies.map(m => m.id), [user]);

  function renderActionButton() {
    if (userMoviesIds.includes(movie.id)) {
      return <Button onClick={() => onRemoveMovie(movie.id)}>Remove movie</Button>;
    }

    return <Button onClick={() => onAddMovie(movie.id)}>Add movie</Button>;
  }

  return (
    <Box>
      <Card>
        <CardMedia component="img" width="auto" height="600" image={movie.posterUrl} />
        <CardContent>
          <Box sx={{ width: '200px' }}>{movie.title}</Box>
        </CardContent>
        <CardActions>{renderActionButton()}</CardActions>
      </Card>
    </Box>
  );
}

export default SingleMovie;
