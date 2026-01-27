import { DropdownMenu as RadixDropdownMenu } from "radix-ui";
import { cn } from "@/utils/cn";

const DropdownMenu = (props: RadixDropdownMenu.DropdownMenuProps) => {
  return <RadixDropdownMenu.Root {...props} />;
};

const DropdownMenuContent = ({
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuContentProps) => {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        className={cn(
          "bg-bg-1 border border-border-2 rounded-lg z-999",
          "data-[state=open]:animate-popover-in data-[state=closed]:animate-popover-out",
          className,
        )}
        {...props}
      />
    </RadixDropdownMenu.Portal>
  );
};

const DropdownMenuTrigger = (
  props: RadixDropdownMenu.DropdownMenuTriggerProps,
) => {
  return <RadixDropdownMenu.Trigger {...props} />;
};

const DropdownMenuItem = ({
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuItemProps) => {
  return (
    <RadixDropdownMenu.Item
      className={cn(
        "p-2 rounded-lg px-4 cursor-pointer hover:bg-bg-2 outline-none text-sm",
        className,
      )}
      {...props}
    />
  );
};

export {
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
};
