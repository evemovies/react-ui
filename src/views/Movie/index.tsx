import { useParams } from 'react-router-dom';

function Movie() {
  const { movieId } = useParams();

  return <div>Single movie view, {movieId}</div>;
}

export default Movie;
