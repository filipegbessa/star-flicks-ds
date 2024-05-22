import { ReactNode } from 'react';

export interface SFHeaderProps {
  logo: ReactNode;
  children?: ReactNode;
  sticky?: boolean;
  minActive?: boolean;
}

export const SFHeader = ({
  logo,
  children,
  sticky,
  minActive,
}: SFHeaderProps) => {
  return (
    <header
      data-testid='SFHeader'
      className={`top-0 left-0 right-0 w-full z-10 bg-white transition ${
        minActive ? 'h-12' : 'h-14'
      } px-5 ${sticky ? 'sticky' : ''}`}
    >
      <div className='contentCenter flex justify-between items-center w-full py-2 h-full'>
        {logo}
        {children}
      </div>
    </header>
  );
};
