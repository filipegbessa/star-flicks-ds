import Image from 'next/image';
import Link from 'next/link';
import { IMovie } from '../../types';
import { SFMoviesListProps } from './SFMoviesList';
import { SFButton, SFTypography } from '..';

export type SFMoviesListItemProps = {
  movie: IMovie;
} & Omit<SFMoviesListProps, 'list'>;

export const SFMoviesListItem = ({
  movie,
  onClick,
  disabled,
  href,
}: SFMoviesListItemProps) => {
  return (
    <Link
      href={`${href}/${movie.tmdbId}`}
      className='flex items-center flex-col'
    >
      <Image
        src={movie.poster_path}
        alt={movie.name}
        width={150}
        height={200}
        style={{ objectFit: 'cover', width: '100%' }}
        priority
      />
      <SFTypography
        lines={2}
        weight='medium'
        className='text-sm break-all h-10 mb-2'
      >
        {movie.name}
      </SFTypography>
      <SFButton
        title='Alugar'
        onClick={(e) => {
          onClick?.(movie);
          e.preventDefault();
        }}
      />
    </Link>
  );
};
