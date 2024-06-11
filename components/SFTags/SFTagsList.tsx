import Link from 'next/link';
import { SFTypography } from '../SFTypography/SFTypography';

type IList = {
  id: number;
  name: string;
};
type SFTagsListProps = {
  list: IList[];
};

export const SFTagsList = ({ list }: SFTagsListProps) => {
  return list.map(({ id, name }) => (
    <Link
      href={`/category/${id}`}
      key={id}
      className='flex justify-center items-center bg-primary px-2 h-5 rounded-sm hover:bg-primary-hover active:bg-primary-active'
    >
      <SFTypography weight='medium' size='sm'>
        {name}
      </SFTypography>
    </Link>
  ));
};
