import { FC, ReactNode } from 'react';

export interface SFHeaderProps {
  logo: ReactNode;
  children?: ReactNode;
  sticky?: boolean;
  minActive?: boolean;
}

export const SFHeader: FC<SFHeaderProps> = ({
  logo,
  children,
  sticky = false,
  minActive = false,
}) => {
  return (
    <header
      data-testid='SFHeader'
      className={`top-0 left-0 right-0 w-full z-10 bg-white transition-all ${
        sticky ? 'sticky' : ''
      } ${minActive ? 'h-12' : 'h-14'} px-5`}
    >
      <div className='flex justify-between items-center w-full h-full py-2 sideSpace contentCenter'>
        {logo}
        {children}
      </div>
    </header>
  );
};
