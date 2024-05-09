import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type SFInputProps = {
  label?: string;
  multiline?: boolean;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

const Content = ({ multiline, ...props }: SFInputProps) => {
  return multiline ? (
    <textarea
      data-testid='SFInput'
      {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
    />
  ) : (
    <input
      data-testid='SFInput'
      {...(props as InputHTMLAttributes<HTMLInputElement>)}
    />
  );
};

export const SFInput = ({ label, multiline, ...rest }: SFInputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <Content multiline={multiline} {...rest} />
    </div>
  );
};
