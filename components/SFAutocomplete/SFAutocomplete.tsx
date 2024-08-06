import { useState } from 'react';
import { SFButton, SFInput } from '..';
import { SFInputProps } from '../SFInput/SFInput';
import { IVariant } from '../../types';

export type SFAutocompleteProps = {
  listSearch: any[];
  select: (item: any) => any;
  loading?: boolean;
} & SFInputProps;

export const SFAutocomplete = ({
  label,
  error,
  name,
  listSearch,
  select,
  loading,
  sizeInput = 'md',
  ...rest
}: SFAutocompleteProps) => {
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const modalStyle: {
    [key: string]: { default: string; label: string; button: 'sm' | 'md' };
  } = {
    sm: { default: 'top-12', label: 'top-7', button: 'sm' },
    md: { default: 'top-[60px]', label: 'top-9', button: 'md' },
    lg: { default: 'top-[76px]', label: 'top-12', button: 'md' },
  };
  const buttonselectProps: {
    size: 'sm' | 'md';
    variant: IVariant;
    className: string;
  } = {
    size: modalStyle[sizeInput].button,
    variant: 'blank',
    className: 'hover:bg-secondary w-full !justify-start',
  };

  return (
    <div className='relative'>
      <SFInput
        label={label}
        sizeInput={sizeInput}
        onClick={() => setShowAutoComplete(true)}
        {...rest}
      />

      {showAutoComplete && (
        <div
          className='fixed w-full h-full top-0 left-0 bg-transparent z-10'
          onClick={() => setShowAutoComplete(false)}
        />
      )}
      <div
        className={`absolute ${
          label ? modalStyle[sizeInput].default : modalStyle[sizeInput].label
        } left-0 z-10 rounded-md bg-white w-full overflow-hidden`}
      >
        <div className='relative z-20'>
          {loading ? (
            <>loading...</>
          ) : (
            <>
              {Boolean(listSearch.length) &&
                showAutoComplete &&
                listSearch.map((item, index) => {
                  if (index > 4) return;

                  if (typeof item === 'string') {
                    return (
                      <SFButton
                        {...buttonselectProps}
                        key={index}
                        onClick={() => {
                          select(item);
                          setShowAutoComplete(false);
                        }}
                      >
                        {item}
                      </SFButton>
                    );
                  }

                  return (
                    <SFButton
                      {...buttonselectProps}
                      key={index}
                      onClick={() => {
                        select(item);
                        setShowAutoComplete(false);
                      }}
                    >
                      {item.name}
                    </SFButton>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
