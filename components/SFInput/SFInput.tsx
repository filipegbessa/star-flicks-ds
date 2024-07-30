import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { SFTypography } from '..';

export type SFInputProps = {
  label?: string;
  multiline?: boolean;
  error?: boolean;
  name?: string;
  sizeInput?: 'sm' | 'md';
  customInput?: JSX.Element;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

const Content = ({
  multiline,
  error,
  name,
  sizeInput = 'md',
  ...props
}: SFInputProps) => {
  const inputSize = {
    sm: 'h-6',
    md: 'h-9',
  };
  const style = `disabled:bg-disabled w-full border rounded-md px-3 bg-input-bg border-input-border focus:border-primary focus:outline-none py-2 text-sm ${
    error ? 'error' : ''
  } ${inputSize[sizeInput]}`;

  return multiline ? (
    <textarea
      name={name}
      data-testid='SFInput'
      className={`${style} min-h-9 h-auto`}
      {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
    />
  ) : (
    <input
      name={name}
      className={`${style}`}
      data-testid='SFInput'
      {...(props as InputHTMLAttributes<HTMLInputElement>)}
    />
  );
};

export const SFInput = ({
  label,
  multiline,
  error,
  name,
  customInput,
  ...rest
}: SFInputProps) => {
  return (
    <div className='flex flex-col w-full'>
      {label && (
        <label htmlFor={name}>
          <SFTypography size='sm'>{label}</SFTypography>
        </label>
      )}
      {customInput || (
        <Content multiline={multiline} name={name} error={error} {...rest} />
      )}
    </div>
  );
};
