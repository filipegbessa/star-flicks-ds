import { MovieTypeEnum } from '../enum';

export type IMovieType =
  | 'name'
  | 'type'
  | 'poster_path'
  | 'popularity'
  | 'overview'
  | 'genres'
  | 'backdrop_path';

export interface IMovie {
  tmdbId?: string;
  id?: string;
  name: string;
  type?: MovieTypeEnum;
  poster_path: string;
  popularity: string;
  overview: string;
  genres: string[];
  backdrop_path: string;
}

export type genresTypes = { id: number; name: string };
