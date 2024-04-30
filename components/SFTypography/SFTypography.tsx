import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("text-black-primary text-sm font-normal", {
  variants: {
    variant: {
      primary: "text-black-primary",
      secondary: "text-black-secondary",
      tertiary: "text-black-tertiary",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      xl: "text-xl",
      title1: "text-txl",
      title2: "text-tlg",
      title3: "text-tmd",
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
});

export type SFTypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements["p"];

export const SFTypography = ({
  children,
  element = "p",
  className,
  ...rest
}: SFTypographyProps) => {
  const Element = element as JSX.ElementType;

  return (
    <Element className={`${textVariants(rest)} ${className}`} {...rest}>
      {children}
    </Element>
  );
};
