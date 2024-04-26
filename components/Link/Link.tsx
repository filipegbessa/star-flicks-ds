export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
  className?: string
}

export const Link = ({ children, href, disabled, className='' }: LinkProps) => {
  return (
    <a
      href={disabled ? undefined : href}
      className={`text-primary aria-disabled:text-disabled ${className}`}
      aria-disabled={disabled}
    >
      {children}
    </a>
  );
};
