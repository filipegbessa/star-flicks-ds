import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps,
} from "@headlessui/react";
import { useState } from "react";
import useStyle from "./SFSwitch.style";

export type SFSwitchProps = {
  defaultEnable?: boolean;
  disabled?: boolean;
  variant?: "common" | "contract";
  onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;

export const SFSwitch = ({
  defaultEnable: enabledByDefault = false,
  disabled,
  onChange,
  variant = "common",
  ...props
}: SFSwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDefault);
  const style = useStyle({ variant, enabled, disabled });

  const handleToogle = () => {
    setEnabled(!enabled);
    onChange?.(!enabled);
  };

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={handleToogle}
      className={style.Container}
      disabled={disabled}
      {...props}
    >
      <span className="sr-only">switch toggle</span>
      <span
        className={style.Switch}
      />
    </HeadlessSwitch>
  );
};
