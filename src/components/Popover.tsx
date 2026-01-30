import { Popover as RadixPopover } from "radix-ui";
import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

const Popover = ({ ...props }: RadixPopover.PopoverProps) => {
  return <RadixPopover.Root {...props} />;
};

const PopoverTrigger = (props: ComponentProps<typeof RadixPopover.Trigger>) => {
  return <RadixPopover.Trigger {...props} />;
};

const PopoverContent = ({
  children,
  className,
  ...props
}: ComponentProps<typeof RadixPopover.Content>) => {
  return (
    <RadixPopover.Portal {...props}>
      <RadixPopover.Content
        sideOffset={8}
        className={cn(
          "animate-popover-in text-sm p-5 bg-bg-1 border border-border-2 rounded-lg z-999",
          className,
        )}
        {...props}
      >
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  );
};

export { Popover, PopoverTrigger, PopoverContent };
