export interface IMovie {
  id: string;
  title: string;
  posterUrl: string;
  released: boolean;
  year: number;
  language: 'en' | 'ru';
}

export interface IMovieSearchParams {
  title: string;
  year: number;
  language: 'en' | 'ru';
}
