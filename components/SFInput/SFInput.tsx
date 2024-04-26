export type SFInputProps = {
  label?: string;
  multiline?: boolean;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const Content = (props: SFInputProps) => {
  return props.multiline ? (
    <textarea
      {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
    />
  ) : (
    <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />
  );
};

export const SFInput = ({ label, className, ...rest }: SFInputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <Content {...rest} />
    </div>
  );
};
