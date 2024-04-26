import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps,
} from "@headlessui/react";
import { useState } from "react";
import useStyle from "./Switch.style";

export type SwitchProps = {
  defaultEnable?: boolean;
  disabled?: boolean;
  variant?: "common" | "contract";
  onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;

export const Switch = ({
  defaultEnable: enabledByDefault,
  disabled,
  onChange,
  variant = "common",
  ...props
}: SwitchProps) => {
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
        // className={`${
        //   enabled ? "translate-x-6" : "translate-x-1"
        // } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
      {/* <span>
        {enabled && <span>123</span>}
        {enabled || <span>456</span>}
      </span> */}
    </HeadlessSwitch>
  );
};
