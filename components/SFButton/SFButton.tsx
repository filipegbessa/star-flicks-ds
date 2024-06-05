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
      disabled={disabled}
      className={`${buttonStyle} ${className}`}
      data-testid='SFButton'
    >
      {children ?? (
        <>
          {icon && <SFIcon name={icon} className={iconStyle} />}
          {title}
        </>
      )}
    </button>
  );
};
