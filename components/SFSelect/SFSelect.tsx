import { ChangeEvent, SelectHTMLAttributes } from 'react';
import { SFTypography } from '../SFTypography/SFTypography';

export type SFSelectProps = {
  options: string[];
  defaultText?: string;
  error?: boolean;
  label?: string;
  onChange?: (value: string) => void;
} & SelectHTMLAttributes<HTMLInputElement>;

export const SFSelect = ({
  label,
  options,
  defaultText,
  error,
  name,
  onChange,
  value = '',
}: SFSelectProps) => {
  const styleInput = `appearance-none disabled:bg-disabled w-full border-2 border-gray rounded-md px-3 h-9 bg-white focus:border-primary focus:outline-none ${
    error ? '!border-red-500' : ''
  }`;

  return (
    <div className='flex flex-col w-full'>
      {label && (
        <label htmlFor={name}>
          <SFTypography>{label}</SFTypography>
        </label>
      )}
      <select
        name={name}
        className={styleInput}
        onChange={(e) => onChange?.(e.target.value)}
        value={value}
      >
        <option value='DEFAULT'>{defaultText || 'Selecione...'}</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
