import { IconsType } from "@/types";

export interface SFIconProps {
  name: IconsType;
}

export const SFIcon = ({ name }: SFIconProps) => {
  return <span className={`icon-${name} text-yellow`} />;
};
