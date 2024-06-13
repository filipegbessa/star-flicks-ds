import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { TypographyWeight } from '../../types';

const textVariants = cva([], {
  variants: {
    variant: {
      primary: 'text-black',
      'primary-contrast': 'text-contrast-primary',
      secondary: 'text-black-secondary',
      'secondary-contrast': 'text-contrast-secondary',
      tertiary: 'text-black-tertiary',
      'tertiary-contrast': 'text-contrast-tertiary',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
      black: 'font-black',
    },
    lines: {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
});

export type SFTypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
  lines?: 1 | 2 | 3;
  weight?: TypographyWeight;
} & JSX.IntrinsicElements['p'];

export const SFTypography = ({
  children,
  element = 'p',
  className = '',
  variant = 'primary',
  size = 'md',
  lines,
  weight = 'normal',
  ...rest
}: SFTypographyProps) => {
  const Element = element as JSX.ElementType;

  return (
    <Element
      className={`${textVariants({
        variant,
        size,
        lines,
        weight,
      })} ${className}`}
      {...rest}
    >
      {children}
    </Element>
  );
};
