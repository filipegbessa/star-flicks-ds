import { SelectHTMLAttributes } from 'react';
import { SFTypography } from '../SFTypography/SFTypography';

type Option = string | { id: string; title: string };

export type SFSelectProps = {
  options: Option[];
  defaultText?: string;
  error?: boolean;
  label?: string;
  name: string;
  sizeInput?: 'sm' | 'md';
} & SelectHTMLAttributes<HTMLSelectElement>;

export const SFSelect = ({
  label,
  options,
  defaultText = 'Selecione...',
  error = false,
  name,
  sizeInput = 'md',
  ...selectProps
}: SFSelectProps) => {
  const inputSize = {
    sm: 'h-6',
    md: 'h-9',
  };
  const inputClassName = `appearance-none disabled:bg-disabled w-full border border-input-border rounded-md px-3 bg-input-bg focus:border-primary focus:outline-none text-sm ${
    error ? '!border-red-500' : ''
  } ${inputSize[sizeInput]}`;

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
