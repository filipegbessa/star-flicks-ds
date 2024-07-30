import { ReactNode } from 'react';

type SFModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  contentClass?: string;
  hasBackdrop?: boolean;
};

export const SFModal = ({
  isOpen,
  onClose,
  children,
  contentClass,
  hasBackdrop = true,
}: SFModalProps) => {
  return (
    <>
      {isOpen ? (
        <div className='fixed bottom-0 left-0 right-0 top-0 z-20 flex h-full w-full items-center justify-center'>
          {hasBackdrop && (
            <div
              className='absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50'
              onClick={onClose}
            />
          )}
          <div className={`contentCenter z-10 relative ${contentClass}`}>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};
