import { useState, useContext } from 'react';
import { CircularProgress, Box, TextField, Button } from '@mui/material';
import { MoviesContext } from 'context/MoviesContext';
import MovieList from 'components/shared/MoviesList';

function AddMovie() {
  const { moviesLoading, movies, getMovies } = useContext(MoviesContext);
  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleMovieSearch() {
    const year = new Date().getFullYear();

    getMovies({ title: searchTerm, language: 'en', year });
  }

  if (moviesLoading) return <CircularProgress />;

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '20px' }}>
      <Box sx={{ display: 'flex', marginBottom: '50px' }}>
        <TextField
          sx={{ width: '100%', marginRight: '20px' }}
          value={searchTerm}
          label="Movie title"
          variant="outlined"
          size="small"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button sx={{ padding: '0 40px' }} variant="contained" onClick={handleMovieSearch}>
          Search
        </Button>
      </Box>

      <MovieList moviesList={movies} />
    </Box>
  );
}

export default AddMovie;
