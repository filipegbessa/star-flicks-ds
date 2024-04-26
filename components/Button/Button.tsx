import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("rounded-md px-6 py-2 disabled:bg-disabled", {
  variants: {
    variant: {
      primary: "bg-primary text-black",
      secondary: "bg-quaternary text-primary",
    },
    size: {
      xs: "h-8 text-xs",
      sm: "h-10 text-sm",
      md: "h-12 text-md",
      xl: "h-14 text-xl",
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
});

export type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "xl";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  disabled,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${buttonVariants(props)} ${className}`}
    >
      <span className="icon-star"></span>
      {children}
    </button>
  );
};
