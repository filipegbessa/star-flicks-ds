import { IconsType } from "@/types";

export interface IconProps {
  name: IconsType;
}

export const Icon = ({ name }: IconProps) => {
  return <span className={`icon-${name} text-yellow`} />;
};
