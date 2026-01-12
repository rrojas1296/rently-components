import type { ComponentProps, ComponentType, SVGProps } from "react";
import { cn } from "../utils/cn";

interface Props extends ComponentProps<"input"> {
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  containerClassName?: string;
  error?: string;
}

const Input = ({ Icon, error, containerClassName, ...other }: Props) => {
  return (
    <div
      className={cn(
        "rounded-lg border-border-1 border flex justify-between items-center h-10 bg-bg-1 pr-3 focus-within:ring-border-1/80 focus-within:ring-2",
        error && "border-danger focus-within:ring-danger/80",
        containerClassName,
      )}
    >
      <input
        type="text"
        className={cn(
          "border-none outline-none flex-1 h-full w-full text-sm pl-3 placeholder:text-text-2 text-text-1",
          error && "placeholder:text-danger/80",
        )}
        {...other}
      />
      {Icon && (
        <Icon
          className={cn("w-5 h-5 text-text-2", error && "text-danger/80")}
        />
      )}
    </div>
  );
};

export default Input;
