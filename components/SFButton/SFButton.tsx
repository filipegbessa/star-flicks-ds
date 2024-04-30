import { IconsType } from "@/types";
import useStyle from "./SFButton.style";
import { SFIcon } from "../SFIcon/SFIcon";

export type SFButtonProps = {
  title?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "blank";
  icon?: IconsType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SFButton = ({
  title,
  disabled,
  className = "",
  size = "md",
  variant = "primary",
  icon,
  ...props
}: SFButtonProps) => {
  const { Button: buttonStyle, Icon: iconStyle } = useStyle({
    variant,
    size,
    squared: Boolean(!title && icon),
  });

  return (
    <button
      {...props}
      disabled={disabled}
      className={`${buttonStyle} ${className}`}
    >
      {icon && <SFIcon name={icon} className={iconStyle} />}
      {title}
    </button>
  );
};
