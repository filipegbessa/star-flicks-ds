import { FC, ReactNode } from 'react';

export interface SFHeaderProps {
  logo: ReactNode;
  children?: ReactNode;
  navigation?: ReactNode;
  sticky?: boolean;
  minActive?: boolean;
}

export const SFHeader: FC<SFHeaderProps> = ({
  logo,
  children,
  navigation,
  sticky = false,
  minActive = false,
}) => {
  return (
    <header
      data-testid='SFHeader'
      className={`top-0 left-0 right-0 w-full z-10 bg-white ${
        sticky ? 'sticky' : ''
      }`}
    >
      <div
        className={`flex justify-between items-center w-full py-2 transition-all sideSpace contentCenter ${
          minActive ? 'h-12' : 'h-14'
        }`}
      >
        {logo}
        {children}
      </div>
      {navigation}
    </header>
  );
};
