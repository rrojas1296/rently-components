import { memo, type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const variants = cva(
  "h-10 px-3 text-sm justify-center flex items-center gap-3 rounded-lg cursor-pointer transition-[background-color] w-fit",
  {
    variants: {
      variant: {
        filled: "bg-primary-500 text-text-3 font-medium hover:bg-primary-400",
        outlined: "border border-border-1 bg-bg-1 text-text-1 hover:bg-bg-2",
        ghost: "bg-bg-1 text-text-1 font-medium hover:bg-bg-2",
        icon: "h-10 w-10 bg-bg-2 justify-center hover:bg-bg-1 text-text-1",
      },
    },
  },
);

interface Props
  extends ComponentProps<"button">, VariantProps<typeof variants> {}

const Button = ({
  variant = "filled",
  className,
  children,
  ...other
}: Props) => {
  return (
    <button className={cn(variants({ variant, className }))} {...other}>
      {children}
    </button>
  );
};

export default memo(Button);
