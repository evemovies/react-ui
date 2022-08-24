import { Card } from 'antd';
import { IMovieItemProps } from './types';

const { Meta } = Card;

function MovieListItem({ movie }: IMovieItemProps) {
  return (
    <Card hoverable style={{ width: 240 }} cover={<img alt={movie.title + ' poster'} src={movie.posterUrl} />}>
      <Meta title={movie.title} />
    </Card>
  );
}

export default MovieListItem;
