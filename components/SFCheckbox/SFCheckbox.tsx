import { InputHTMLAttributes } from 'react';
import { SFTypography } from '../SFTypography/SFTypography';

export type SFCheckboxProps = {
  error?: boolean;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const SFCheckbox = ({
  label,
  error,
  name,
  ...props
}: SFCheckboxProps) => {
  return (
    <div className='flex flex-col w-full items-start'>
      {label && (
        <label htmlFor={name}>
          <SFTypography>{label}</SFTypography>
        </label>
      )}

      <input
        type='checkbox'
        name={name}
        className='mt-1 h-6 appearance-none border-2 border-primary w-6 rounded-sm checked:bg-primary'
        {...props}
      />
    </div>
  );
};
