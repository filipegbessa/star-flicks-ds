import { cva } from "class-variance-authority";
import classNames from "classnames";
import { SwitchProps } from "./Switch";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ variant, enabled, disabled }: SwitchProps) => {
  const containerVariant = cva(
    classNames(
      "relative inline-flex h-6 w-11 items-center rounded-full disabled:bg-disabled bg-primary transition",
      { "pointer-events-none": disabled },
      { "bg-opacity-50": !enabled && !disabled }
    ),
    {
      variants: {
        variant: {
          common: classNames(
            { "bg-primary": enabled },
            { "bg-primary hover:bg-primaryHover": !enabled }
          ),
          contract: classNames(
            { "bg-success": enabled },
            { "bg-error": !enabled }
          ),
        },
      },
      defaultVariants: {
        variant: "common",
      },
    }
  );
  const containerClasses = containerVariant({ variant });

  const switchClasses = classNames(
    "inline-block bg-white h-4 w-4 rounded-full transform transition-transform duration-200 ease-in-out",
    enabled ? "translate-x-6" : "translate-x-1"
  );

  return {
    Switch: switchClasses,
    Container: containerClasses,
  };
};
