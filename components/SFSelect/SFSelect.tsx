import { SelectHTMLAttributes } from 'react';
import { SFTypography } from '../SFTypography/SFTypography';

type Option = string | { id: string; title: string };

export type SFSelectProps = {
  options: Option[];
  defaultText?: string;
  error?: boolean;
  label?: string;
  name: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const SFSelect = ({
  label,
  options,
  defaultText = 'Selecione...',
  error = false,
  name,
  ...selectProps
}: SFSelectProps) => {
  const inputClassName = `appearance-none disabled:bg-disabled w-full border-2 border-gray rounded-md px-3 h-9 bg-white focus:border-primary focus:outline-none ${
    error ? '!border-red-500' : ''
  }`;

  const renderOptions = () => {
    return options.map((option, index) => {
      const isString = typeof option === 'string';

      return (
        <option
          key={isString ? index : option.id}
          value={isString ? option : option.id}
        >
          {isString ? option : option.title}
        </option>
      );
    });
  };

  return (
    <div className='flex flex-col w-full'>
      {label && (
        <label htmlFor={name}>
          <SFTypography>{label}</SFTypography>
        </label>
      )}
      <select name={name} className={inputClassName} {...selectProps}>
        <option value=''>{defaultText}</option>
        {renderOptions()}
      </select>
    </div>
  );
};
