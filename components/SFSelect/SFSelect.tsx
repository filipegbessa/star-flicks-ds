import { SelectHTMLAttributes } from 'react';
import { SFTypography } from '../SFTypography/SFTypography';
import { inputStye } from '../../utils';

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
  const inputClassName = `appearance-none px-3 ${
    error ? '!border-red-500' : ''
  } ${inputStye[sizeInput].content}`;

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
          <SFTypography size={inputStye[sizeInput].label}>{label}</SFTypography>
        </label>
      )}
      <select name={name} className={inputClassName} {...selectProps}>
        <option value=''>{defaultText}</option>
        {renderOptions()}
      </select>
    </div>
  );
};
