import { ButtonHTMLAttributes } from 'react';
import { IVariant, IconsType } from '../../types';
import useStyle from './SFButton.style';
import { SFIcon } from '../SFIcon/SFIcon';

export type SFButtonProps = {
  title?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: IVariant;
  icon?: IconsType;
  full?: boolean;
  circle?: boolean;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SFButton = ({
  title,
  disabled,
  className = '',
  size = 'md',
  variant = 'primary',
  icon,
  children,
  full,
  circle,
  isLoading,
  ...props
}: SFButtonProps) => {
  const { Button: buttonStyle, Icon: iconStyle } = useStyle({
    variant,
    size,
    squared: Boolean(!title && icon),
    full,
    circle,
  });

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`${buttonStyle} ${className}`}
      data-testid='SFButton'
    >
      {isLoading && <SFIcon className='animate-spin absolute' name='loading' />}

      <span className={`${isLoading ? 'opacity-0' : ''}`}>
        {children ?? (
          <>
            {icon && <SFIcon name={icon} className={iconStyle} />}
            {title}
          </>
        )}
      </span>
    </button>
  );
};
