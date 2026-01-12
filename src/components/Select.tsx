import { Select as RadixSelect } from "radix-ui";
import { cn } from "../utils/cn";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

const SelectRoot = (props: RadixSelect.SelectProps) => {
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
      <RadixSelect.ItemText className="text-text-1 text-sm">
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
        className,
        error &&
          "border-danger text-danger data-[slot=select-value]:text-danger/80",
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
  ...other
}: RadixSelect.SelectContentProps) => {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        data-slot="select-content"
        className={cn(
          "rounded-lg z-999 min-w-42 bg-bg-1 border border-border-2 data-[state=open]:animate-popover-in shadow-sm",
          className,
        )}
        position="popper"
        {...other}
      >
        <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
};

interface Props {
  options: { value: string; label: string }[];
  placeholder: string;
  onChange?: (value: string) => void;
  value?: string;
  error?: string;
  className?: string;
  contentClassName?: string;
  defaultValue?: string;
}

const Select = ({
  options,
  placeholder,
  onChange,
  defaultValue,
  className,
  contentClassName,
  value,
  error,
}: Props) => {
  return (
    <SelectRoot
      onValueChange={onChange}
      value={value}
      defaultValue={defaultValue}
    >
      <SelectTrigger error={error} className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={contentClassName}>
        {options.map((opt, i) => (
          <SelectItem key={i} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export default Select;
