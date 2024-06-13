import Link from 'next/link';
import { SFTypography } from '../SFTypography/SFTypography';
import { ISize, SFTagsListProps } from './SFTagsList';

type IList = {
  id: number;
  name: string;
};
export type SFTagsListItemProps = {
  item: IList;
} & Omit<SFTagsListProps, 'list'>;

export const SFTagsListItem = ({
  item,
  size = 'sm',
  link,
}: SFTagsListItemProps) => {
  const { name, id } = item;
  const styleSize: {
    [key: string]: { content: string; text: ISize };
  } = {
    xs: {
      content: 'h-4',
      text: 'xs',
    },
    sm: {
      content: 'h-6',
      text: 'sm',
    },
    md: {
      content: 'h-9',
      text: 'md',
    },
    lg: {
      content: 'h-14',
      text: 'xl',
    },
    xl: {
      content: 'h-14',
      text: 'xl',
    },
  };
  const style = `flex justify-center items-center bg-primary px-3 rounded-sm ${
    link ? 'hover:bg-primary-hover active:bg-primary-active' : ''
  } ${styleSize[size].content}`;
  const container = (
    <SFTypography
      className={link ? '' : style}
      weight='medium'
      size={styleSize[size].text}
      variant='primary-contrast'
    >
      {name}
    </SFTypography>
  );

  return (
    <>
      {link ? (
        <Link className={style} href={`/${link}/${id}`} key={id}>
          {container}
        </Link>
      ) : (
        container
      )}
    </>
  );
};
