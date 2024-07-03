import { ReactNode } from 'react';

type SFModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  contentClass?: string;
};

export const SFModal = ({
  isOpen,
  onClose,
  children,
  contentClass,
}: SFModalProps) => {
  return (
    <>
      {isOpen ? (
        <div className='fixed bottom-0 left-0 right-0 top-0 z-20 flex h-full w-full items-center justify-center'>
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50' />
          <div className={`contentCenter ${contentClass}`}>{children}</div>
        </div>
      ) : null}
    </>
  );
};
