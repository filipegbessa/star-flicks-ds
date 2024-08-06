import { Inter } from 'next/font/google';
import {
  SFHeader,
  SFInput,
  SFRanking,
  SFSwitch,
  SFTagsList,
} from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  bg-[white] md:bg-[blue] ${inter.className}`}
    >
      <SFHeader logo='logo' />
      <SFSwitch variant='common' />
      <SFSwitch variant='contract' />
      <SFRanking label='Ranking' value={4.78} />
      <SFTagsList list={[{ id: 1, name: 'Tag' }]} />
      <SFInput
        value='123'
        onChange={() => console.log('teste')}
        label='Label'
      />
      <SFInput
        value='123'
        onChange={() => console.log('teste')}
        label='Label'
        disabled
      />
      <SFInput
        value='123'
        onChange={() => console.log('teste')}
        multiline
        rows={5}
        label='Label'
      />
    </main>
  );
}
