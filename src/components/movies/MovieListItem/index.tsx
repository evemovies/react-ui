import { Card } from 'antd';
import { IMovieItemProps } from './types';
import s from './style.module.scss';

const { Meta } = Card;

function MovieListItem({ movie }: IMovieItemProps) {
  return (
    <Card className={s.movieCard} hoverable style={{ width: 240 }} cover={<img src={movie.posterUrl} alt={movie.title + ' poster'} />}>
      <Meta title={movie.title} />
    </Card>
  );
}

export default MovieListItem;
