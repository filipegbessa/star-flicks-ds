export const inputStyeDefault =
  'disabled:bg-disabled w-full border border-input-border rounded-md bg-input-bg focus:border-primary focus:outline-none';

type inputStyePoprs = {
  [key in 'sm' | 'md' | 'lg']: {
    label: 'sm' | 'md' | 'lg';
    content: string;
  };
};

export const inputStye: inputStyePoprs = {
  sm: { label: 'sm', content: `text-sm h-7 ${inputStyeDefault}` },
  md: { label: 'md', content: `text-md h-9 ${inputStyeDefault}` },
  lg: { label: 'lg', content: `text-xl h-12 ${inputStyeDefault}` },
};
