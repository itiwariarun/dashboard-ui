import { twMerge } from "tailwind-merge";
import { FC, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const baseButton =
  "px-3 w-fit flex items-center cursor-pointer justify-center whitespace-nowrap h-12 whitespace-nowrap rounded-lg transition-colors";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-main-bg text-white hover:bg-main-bg/90 duration-300 font-medium text-center text-sm",
  secondary:
    "text-main-bg bg-main-bg/10 hover: bg-main-bg/5 duration-300 text-sm font-medium",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const combinedClasses = twMerge(
    baseButton,
    variantClasses[variant],
    className
  );

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
