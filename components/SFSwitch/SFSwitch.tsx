import { Switch, type SwitchProps } from "@headlessui/react";
import { useState } from "react";
import useStyle from "./SFSwitch.style";

export type SFSwitchProps = {
  variant?: "common" | "contract";
} & SwitchProps<typeof Switch>;

export const SFSwitch = ({
  defaultChecked: enabledByDefault = false,
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
    <Switch
      checked={enabled}
      onChange={handleToogle}
      className={style.Container}
      disabled={disabled}
      {...props}
    >
      <span className="sr-only">switch toggle</span>
      <span className={style.Switch} />
    </Switch>
  );
};
