import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
  SFHeader,
  SFInput,
  SFMoviesList,
  SFRanking,
  SFSelect,
  SFTagsList,
  SFTypography,
} from '@/components';
import { IMovie } from '@/types';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  bg-[red] md:bg-[blue] ${inter.className}`}
    >
      <SFHeader logo='logo' />
      <SFSelect label='Ranking' options={['1', '2', '3', '4', '5']} />
      <SFRanking label='Ranking' value={5} />
      <SFTagsList list={[{ id: 1, title: 'Tag' }]} />
      <SFInput label='Label' />
      <SFInput label='Label' disabled />
      <SFInput multiline rows={5} label='Label' disabled />
      <div className='px-5'>
        <SFMoviesList
          href='/movie'
          list={[
            {
              id: '1',
              name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
              poster_path: '/teste',
              popularity: '80',
              overview: '80',
              genres: ['80'],
              backdrop_path: '80',
            },
            {
              id: '2',
              name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
              poster_path: '/teste',
              popularity: '80',
              overview: '80',
              genres: ['80'],
              backdrop_path: '80',
            },
            {
              id: '3',
              name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
              poster_path: '/teste',
              popularity: '80',
              overview: '80',
              genres: ['80'],
              backdrop_path: '80',
            },
            {
              id: '4',
              name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
              poster_path: '/teste',
              popularity: '80',
              overview: '80',
              genres: ['80'],
              backdrop_path: '80',
            },
            {
              id: '5',
              name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
              poster_path: '/teste',
              popularity: '80',
              overview: '80',
              genres: ['80'],
              backdrop_path: '80',
            },
            {
              id: '6',
              name: '1234',
              poster_path: '/teste',
              popularity: '80',
              overview: '80',
              genres: ['80'],
              backdrop_path: '80',
            },
            {
              id: '7',
              name: '1234',
              poster_path: '/teste',
              popularity: '80',
              overview: '80',
              genres: ['80'],
              backdrop_path: '80',
            },
          ]}
        />
      </div>
    </main>
  );
}
