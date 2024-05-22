import { IconsType } from '../../types';
import classNames from 'classnames';

export type SFIconProps = {
  name: IconsType;
  className?: string;
};

export const SFIcon = ({ name, className }: SFIconProps) => {
  return (
    <span
      data-testid='SFIcon'
      className={classNames(`icon-${name}`, className)}
    />
  );
};
