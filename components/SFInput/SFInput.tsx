import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { SFTypography } from '..';

export type SFInputProps = {
  label?: string;
  multiline?: boolean;
  error?: boolean;
  name?: string;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

const Content = ({ multiline, error, name, ...props }: SFInputProps) => {
  const styleInput = `disabled:bg-disabled w-full border-2 border-gray rounded-md px-3 h-9 bg-white focus:border-primary focus:outline-none ${
    error ? '!border-red-500' : ''
  }`;

  return multiline ? (
    <textarea
      name={name}
      data-testid='SFInput'
      className={`${styleInput} h-auto py-2`}
      {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
    />
  ) : (
    <input
      name={name}
      className={styleInput}
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
  ...rest
}: SFInputProps) => {
  return (
    <div className='flex flex-col w-full'>
      {label && (
        <label htmlFor={name}>
          <SFTypography>{label}</SFTypography>
        </label>
      )}
      <Content multiline={multiline} name={name} error={error} {...rest} />
    </div>
  );
};
