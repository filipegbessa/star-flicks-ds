import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import useStyle from './SFSwitch.style';

export interface SFSwitchProps {
  variant?: 'common' | 'contract';
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const SFSwitch: React.FC<SFSwitchProps> = ({
  defaultChecked = false,
  disabled = false,
  onChange,
  variant = 'common',
  ...props
}) => {
  const [enabled, setEnabled] = useState(defaultChecked);
  const style = useStyle({ variant, enabled, disabled });

  const handleToggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    onChange?.(newValue);
  };

  return (
    <Switch
      data-testid='SFSwitch'
      checked={enabled}
      onChange={handleToggle}
      className={style.Container}
      disabled={disabled}
      {...props}
    >
      <span className='sr-only'>Toggle switch</span>
      <span className={style.Switch} />
    </Switch>
  );
};
