import {
  useState,
  type ComponentProps,
  type ComponentType,
  type SVGProps,
} from "react";
import { cn } from "@/utils/cn";
import { CalendarIcon } from "lucide-react";
import { Popover } from "radix-ui";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "dayjs/locale/en";
import Calendar from "./Calendar";

interface Props extends ComponentProps<"button"> {
  placeholder: string;
  setDate: (date: Date | undefined) => void;
  date?: Date;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  locale?: "en" | "es";
  error?: string;
}
const DatePicker = ({
  placeholder,
  locale = "es",
  className,
  Icon,
  date,
  setDate,
  error,
  ...props
}: Props) => {
  const formattedDate = dayjs(date).utc().locale(locale).format("DD-MM-YYYY");
  const [open, setOpen] = useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          className={cn(
            "h-10 px-3 flex items-center bg-bg-1 gap-3 rounded-lg border border-border-1 text-sm text-text-2 min-w-sm justify-between cursor-pointer",
            date && "text-text-1",
            error && "border-danger text-danger",
            className,
          )}
          {...props}
        >
          {date ? formattedDate : placeholder}
          {Icon ? (
            <Icon className="text-text-2 w-5 h-5" />
          ) : (
            <CalendarIcon
              className={cn("text-text-2 w-5 h-5", error && "text-danger")}
            />
          )}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          align="start"
          className={cn(
            "p-2 z-999 border-border-2 rounded-lg border bg-bg-1 data-[state=open]:animate-popover-in data-[state=closed]:animate-popover-out",
          )}
        >
          <Calendar
            date={date}
            setDate={(date) => {
              setDate(date);
              setOpen(false);
            }}
            locale={locale}
            rootClassName="border-none p-0"
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default DatePicker;
