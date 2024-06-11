import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
  SFHeader,
  SFInput,
  SFMoviesList,
  SFRanking,
  SFSelect,
  SFSwitch,
  SFTagsList,
  SFTypography,
} from '@/components';
import { IMovie } from '@/types';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  bg-[white] md:bg-[blue] ${inter.className}`}
    >
      <SFHeader logo='logo' />
      <SFSwitch variant='common' />
      <SFSwitch variant='contract' />
      <SFSelect label='Ranking' options={['1', '2', '3', '4', '5']} />
      <SFRanking label='Ranking' value={4.78} />
      <SFTagsList list={[{ id: 1, name: 'Tag' }]} />
      <SFInput label='Label' />
      <SFInput label='Label' disabled />
      <SFInput multiline rows={5} label='Label' disabled />
    </main>
  );
}
