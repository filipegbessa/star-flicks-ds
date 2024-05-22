import { ButtonHTMLAttributes } from 'react';
import { IconsType } from '../../types';
import useStyle from './SFButton.style';
import { SFIcon } from '../SFIcon/SFIcon';

export type SFButtonProps = {
  title?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blank';
  icon?: IconsType;
  full?: boolean;
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
  ...props
}: SFButtonProps) => {
  const { Button: buttonStyle, Icon: iconStyle } = useStyle({
    variant,
    size,
    squared: Boolean(!title && icon),
    full,
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
