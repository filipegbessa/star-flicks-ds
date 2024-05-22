import { IMovie } from '../../types';
import { SFMoviesListItem } from './SFMoviesListItem';

export type SFMoviesListProps = {
  list: IMovie[];
  onClick?: (movie: IMovie) => void;
  disabled?: boolean;
  href: string;
};

export const SFMoviesList = ({ list, ...props }: SFMoviesListProps) => {
  return (
    <ul className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full'>
      {list?.map((movie) => (
        <li key={movie.id}>
          <SFMoviesListItem movie={movie} {...props} />
        </li>
      ))}
    </ul>
  );
};
