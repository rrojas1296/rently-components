import { type ComponentProps, type ComponentType, type SVGProps } from "react";
import { cn } from "../utils/cn";
import { CalendarIcon } from "lucide-react";
import { Popover } from "radix-ui";
import Calendar from "./Calendar";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "dayjs/locale/en";

interface Props extends ComponentProps<"button"> {
  placeholder: string;
  setSelected: (date: Date | undefined) => void;
  selected?: Date | undefined;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  locale?: "en" | "es";
}
const DatePicker = ({
  placeholder,
  locale = "es",
  className,
  Icon,
  selected,
  setSelected,
  ...props
}: Props) => {
  const formattedDate = dayjs(selected).locale(locale).format("DD-MM-YYYY");
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className={cn(
            "h-10 px-3 flex items-center bg-bg-1 gap-3 rounded-lg border border-border-1 text-sm text-text-2 min-w-sm justify-between cursor-pointer",
            selected && "text-text-1",
            className,
          )}
          {...props}
        >
          {selected ? formattedDate : placeholder}
          {Icon ? (
            <Icon className="text-text-2 w-5 h-5" />
          ) : (
            <CalendarIcon className="text-text-2 w-5 h-5" />
          )}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          align="start"
          className={cn(
            "p-2 border-border-2 rounded-lg border bg-bg-1 data-[state=open]:animate-popover-in",
          )}
        >
          <Calendar
            selected={selected}
            setSelected={setSelected}
            rootClassName="border-none p-0"
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default DatePicker;
