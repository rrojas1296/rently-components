import { Select as RadixSelect } from "radix-ui";
import { cn } from "@/utils/cn";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const Select = (props: RadixSelect.SelectProps) => {
  return <RadixSelect.Root {...props} />;
};

const SelectItem = ({
  children,
  className,
  ...other
}: RadixSelect.SelectItemProps) => {
  return (
    <RadixSelect.Item
      className={cn(
        "text-sm px-3 py-2 rounded-lg bg-bg-1 text-text-1 cursor-pointer hover:bg-bg-2 outline-none",
        className,
      )}
      {...other}
    >
      <RadixSelect.ItemText asChild className="text-text-1 text-sm">
        {children}
      </RadixSelect.ItemText>
      <span className="absolute right-2 items-center justify-center">
        <RadixSelect.ItemIndicator>
          <CheckIcon className="w-4 h-4 text-text-2" />
        </RadixSelect.ItemIndicator>
      </span>
    </RadixSelect.Item>
  );
};

const SelectTrigger = ({
  className,
  error,
  children,
  ...other
}: RadixSelect.SelectTriggerProps & { error?: string }) => {
  return (
    <RadixSelect.Trigger
      className={cn(
        "bg-bg-1 *:data-[slot=select-value]:overflow-hidden whitespace-nowrap justify-between data-placeholder:text-text-2 text-text-1 flex items-center gap-3 rounded-lg text-sm cursor-pointer px-3 h-10 border border-border-1 outline-none",
        "data-[state=open]:ring-2 data-[state=open]:ring-border-1/80",
        error &&
          "border-danger text-danger data-[slot=select-value]:text-danger data-placeholder:text-danger",
        className,
      )}
      aria-label="select-trigger"
      {...other}
    >
      {children}
      <RadixSelect.Icon asChild>
        <ChevronDownIcon
          className={cn("w-5 h-5 text-text-2", error && "text-danger/80")}
        />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  );
};

const SelectValue = ({ className, ...other }: RadixSelect.SelectValueProps) => {
  return (
    <RadixSelect.Value
      data-slot="select-value"
      className={className}
      {...other}
    />
  );
};

const SelectContent = ({
  children,
  className,
  position = "popper",
  ...other
}: RadixSelect.SelectContentProps) => {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        data-slot="select-content"
        className={cn(
          "rounded-lg z-999 overflow-y-auto min-w-(--radix-select-trigger-width) bg-bg-1 border border-border-2 data-[state=open]:animate-popover-in shadow-sm",
          "p-px",
          position === "popper" &&
            "max-h-82 w-full min-w-(--radix-select-trigger-width) scroll-my-1",
          className,
        )}
        sideOffset={8}
        position={position}
        {...other}
      >
        <RadixSelect.SelectScrollUpButton className="flex justify-center items-center">
          <ChevronUpIcon className="w-5 h-5 text-text-2 " />
        </RadixSelect.SelectScrollUpButton>
        <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        <RadixSelect.SelectScrollDownButton className="flex justify-center items-center">
          <ChevronDownIcon className="w-5 h-5 text-text-2 " />
        </RadixSelect.SelectScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
};

export { Select, SelectItem, SelectTrigger, SelectValue, SelectContent };
