import { useState } from 'react';
import { SFButton, SFInput } from '..';
import { SFInputProps } from '../SFInput/SFInput';
import { IMovie } from '@/types';

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
  ...rest
}: SFAutocompleteProps) => {
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  return (
    <div className='relative'>
      <SFInput onClick={() => setShowAutoComplete(true)} {...rest} />

      {showAutoComplete && (
        <div
          className='fixed w-full h-full top-0 left-0 bg-transparent z-10'
          onClick={() => setShowAutoComplete(false)}
        />
      )}
      <div className='absolute top-9 left-0 z-10 rounded-md bg-white w-full overflow-hidden'>
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
                        variant='blank'
                        key={index}
                        className='hover:bg-secondary w-full !justify-start'
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
                      variant='blank'
                      key={index}
                      className='hover:bg-secondary w-full !justify-start'
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
