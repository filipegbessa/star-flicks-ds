import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { SFTypography } from '..';
import { cpfMask, inputStye, phoneMask } from '../../utils';

export type SFInputProps = {
  label?: string;
  multiline?: boolean;
  error?: boolean;
  errorMessage?: string;
  name?: string;
  sizeInput?: 'sm' | 'md' | 'lg';
  customInput?: JSX.Element;
  mask?: string;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

const Content = ({
  multiline,
  error,
  name,
  sizeInput = 'md',
  mask,
  value,
  ...props
}: SFInputProps) => {
  const style = `px-3 py-2 SFInput ${error ? 'error' : ''} ${
    inputStye[sizeInput].content
  }`;

  const selectMask = (maskType: string, value: string): string => {
    if (maskType === 'cpf') return cpfMask(value);
    if (maskType === 'phone') return phoneMask(value);

    return value;
  };

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
      {...(mask ? { value: selectMask(mask, value as string) } : { value })}
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
  sizeInput = 'md',
  errorMessage,
  ...rest
}: SFInputProps) => {
  return (
    <div className='flex flex-col w-full'>
      {label && (
        <label htmlFor={name}>
          <SFTypography size={inputStye[sizeInput].label}>{label}</SFTypography>
        </label>
      )}
      {customInput || (
        <Content
          multiline={multiline}
          name={name}
          error={error}
          sizeInput={sizeInput}
          {...rest}
        />
      )}
      {error && errorMessage && (
        <SFTypography size='sm' className='text-error'>
          {errorMessage}
        </SFTypography>
      )}
    </div>
  );
};
