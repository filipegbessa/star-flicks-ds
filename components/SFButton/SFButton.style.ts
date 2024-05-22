import { cva } from 'class-variance-authority';
import { SFButtonProps } from './SFButton';
import classNames from 'classnames';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  variant,
  size,
  squared,
  full,
}: SFButtonProps & { squared: boolean }) => {
  const buttonVariants = cva(
    classNames(
      'rounded-sm disabled:text-disabled disabled:bg-disabled flex justify-center items-center font-medium',
      { 'px-3': !squared },
      { 'w-full': full }
    ),
    {
      variants: {
        variant: {
          primary:
            'bg-primary text-contrast-primary hover:bg-primary-hover active:bg-primary-active',
          secondary:
            'bg-secondary text-contrast-secondary hover:bg-secondary-hover active:bg-secondary-active',
          tertiary:
            'bg-tertiary text-contrast-tertiary hover:bg-tertiary-hover active:bg-tertiary-active',
          blank: 'bg-transparent text-black',
        },
        size: {
          xs: classNames('h-4 text-xs', { 'w-4': squared }),
          sm: classNames('h-6 text-sm', { 'w-6': squared }),
          md: classNames('h-9 text-md', { 'w-9': squared }),
          lg: classNames('h-14 text-xl', { 'w-14': squared }),
          xl: classNames('h-14 text-xl', { 'w-14': squared }),
        },
        defaultVariants: {
          variant: 'primary',
          size: 'md',
        },
      },
    }
  );
  const buttonIconSize = cva([], {
    variants: {
      variant: {
        primary: 'text-contrast-primary',
        secondary: 'text-contrast-secondary',
        tertiary: 'text-contrast-tertiary',
        blank: 'text-primary',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-xl',
        lg: 'text-4xl',
        xl: 'text-4xl',
      },
      defaultVariants: {
        variant: 'primary',
        size: 'md',
      },
    },
  });

  return {
    Button: buttonVariants({ variant, size }),
    Icon: buttonIconSize({ variant, size }),
  };
};
