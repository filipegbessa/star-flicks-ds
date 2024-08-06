import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { SFTypography } from '..';
import { inputStye, inputStyeDefault } from '../../utils';

export type SFInputProps = {
  label?: string;
  multiline?: boolean;
  error?: boolean;
  name?: string;
  sizeInput?: 'sm' | 'md' | 'lg';
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
  const style = `px-3 py-2 ${error ? 'error' : ''} ${
    inputStye[sizeInput].content
  } ${inputStyeDefault}
  `;

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
  sizeInput = 'md',
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
    </div>
  );
};
