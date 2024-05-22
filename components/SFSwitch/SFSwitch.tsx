import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import useStyle from './SFSwitch.style';
import { SFTypography } from '../SFTypography/SFTypography';

export interface SFSwitchProps {
  variant?: 'common' | 'contract';
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const SFSwitch: React.FC<SFSwitchProps> = ({
  defaultChecked = false,
  disabled = false,
  onChange,
  variant = 'common',
  label,
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
    <div className='flex flex-col w-full'>
      {label && (
        <label>
          <SFTypography>{label}</SFTypography>
        </label>
      )}
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
    </div>
  );
};
