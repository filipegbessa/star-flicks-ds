import { IconsType } from "@/types";
import classNames from "classnames";

export type SFIconProps = {
  name: IconsType;
  className?: string;
};

export const SFIcon = ({ name, className, ...props }: SFIconProps) => {
  return <span className={classNames(`icon-${name}`, className)} />;
};
