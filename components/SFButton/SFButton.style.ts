import { cva } from "class-variance-authority";
import { SFButtonProps } from "./SFButton";
import classNames from "classnames";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  variant,
  size,
  squared,
}: SFButtonProps & { squared: boolean }) => {
  const buttonVariants = cva(
    classNames(
      "rounded-sm disabled:bg-disabled flex justify-center items-center",
      { "px-3": !squared }
    ),
    {
      variants: {
        variant: {
          primary: "bg-primary text-white",
          secondary: "bg-quaternary text-primary",
          blank: "bg-transparent text-primary",
        },
        size: {
          xs: classNames("h-4 text-xs", { "w-4": squared }),
          sm: classNames("h-6 text-sm", { "w-6": squared }),
          md: classNames("h-9 text-md", { "w-9": squared }),
          lg: classNames("h-14 text-xl", { "w-14": squared }),
          xl: classNames("h-14 text-xl", { "w-14": squared }),
        },
        defaultVariants: {
          variant: "primary",
          size: "md",
        },
      },
    }
  );
  const buttonIconSize = cva([], {
    variants: {
      variant: {
        primary: "text-white",
        secondary: "text-primary",
        blank: "text-primary",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-xl",
        lg: "text-4xl",
        xl: "text-4xl",
      },
      defaultVariants: {
        variant: "primary",
        size: "md",
      },
    },
  });

  return {
    Button: buttonVariants({ variant, size }),
    Icon: buttonIconSize({ variant, size }),
  };
};
