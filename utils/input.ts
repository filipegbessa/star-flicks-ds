type inputStyePoprs = {
  [key in 'sm' | 'md' | 'lg']: {
    label: 'sm' | 'md' | 'lg';
    content: string;
  };
};

export const inputStye: inputStyePoprs = {
  sm: { label: 'sm', content: 'SFInput-sm' },
  md: { label: 'md', content: 'SFInput-md' },
  lg: { label: 'lg', content: 'SFInput-lg' },
};

export const cpfMask = (value?: string) => {
  if (!value) return '';

  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const phoneMask = (value?: string): string => {
  if (!value) return '';

  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})/, '$1-$2')
    .substring(0, 15);
};
