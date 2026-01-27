import { Fragment, type ComponentProps } from "react";
import { cn } from "@/utils/cn";

export interface Step {
  label: string;
}

interface Props extends Omit<ComponentProps<"div">, "children"> {
  steps: Step[];
  currentStep?: number;
  labelClassName?: string;
}

const Stepper = ({
  steps,
  currentStep = 0,
  className,
  labelClassName,
}: Props) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {steps.map((step, i) => {
        const active = currentStep >= i;
        return (
          <Fragment key={i}>
            <div key={i} className="flex flex-col items-center">
              <button
                className={cn(
                  "relative w-10 h-10 rounded-lg cursor-pointer bg-bg-1 text-text-2 border border-border-2 font-bold",
                  active && "bg-primary-500 border-none text-text-3",
                )}
                key={i}
              >
                {i + 1}
                <p
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-full text-center w-fit text-sm font-normal translate-y-px",
                    active && "text-text-1",
                    labelClassName,
                  )}
                >
                  {step.label}
                </p>
              </button>
            </div>
            {i + 1 < steps.length && (
              <div className="h-px w-full bg-border-2" />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
