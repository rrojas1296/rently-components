import { Popover as RadixPopover } from "radix-ui";
import { cn } from "../utils/cn";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<typeof RadixPopover.PopoverContent> {
  Trigger: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const Popover = ({
  Trigger,
  children,
  className,
  open,
  setOpen,
  ...props
}: Props) => {
  return (
    <RadixPopover.Root open={open} onOpenChange={setOpen}>
      <RadixPopover.Trigger asChild>{Trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          sideOffset={8}
          className={cn(
            "animate-popover-in text-sm p-5 bg-bg-1 border border-border-2 rounded-lg",
            className,
          )}
          {...props}
        >
          {children}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

export default Popover;
