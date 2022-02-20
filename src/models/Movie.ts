export interface IMovie {
  id: string;
  title: string;
  posterUrl: string;
  released: boolean;
  year: number;
  language: 'en' | 'ru';
}
