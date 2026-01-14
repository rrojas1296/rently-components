import Button from "./Button";
import { useMemo, useState } from "react";
import {
  CAL_MONTHS,
  CAL_YEARS,
  generateDays,
  WEEK_DAYS,
} from "../constants/calendar";
import { cn } from "../utils/cn";
import dayjs from "dayjs";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

interface Props {
  locale?: "en" | "es";
  selected?: Date | undefined;
  setSelected: (date: Date | undefined) => void;
  rootClassName: string;
  buttonDayClassName: string;
  containerMonthDaysClassName: string;
}

const Calendar = ({
  locale = "en",
  selected,
  setSelected,
  rootClassName,
  buttonDayClassName,
  containerMonthDaysClassName,
}: Props) => {
  const today = useMemo(() => dayjs(), []);

  const [selectedMonth, setSelectedMonth] = useState(today.month());
  const [selectedYear, setSelectedYear] = useState(today.year());

  const days = useMemo(
    () => generateDays(selectedMonth, selectedYear),
    [selectedMonth, selectedYear],
  );

  return (
    <div
      className={cn(
        "border-border-2 border py-3 px-4 bg-bg-1 rounded-lg",
        rootClassName,
      )}
    >
      <div className="flex items-center justify-center gap-3 mb-2">
        <Button
          variant="ghost"
          className="w-fit px-2 h-9 outline-none"
          onClick={() =>
            setSelectedMonth((prev) => {
              if (prev === 0) {
                setSelectedYear((prev) => prev - 1);
                return 11;
              }
              return prev - 1;
            })
          }
        >
          <ChevronLeftIcon className="w-5 h-5 text-text-2" />
        </Button>
        <div
          data-slot="container"
          className="border focus-within:ring-2 focus-within:ring-border-1/80 border-border-1 rounded-lg bg-bg-1 h-9 w-20 overflow-hidden flex gap-2 items-center relative"
        >
          <select
            className="text-sm h-full w-full appearance-none px-2 outline-none border-none"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          >
            {CAL_MONTHS.map((m, i) => (
              <option key={i} value={i} className="bg-bg-2">
                {m[locale as keyof typeof m]}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="w-5 h-5 text-text-2 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div
          data-slot="container"
          className="border focus-within:ring-2 focus-within:ring-border-1/80 border-border-1 rounded-lg bg-bg-1 h-9 w-20 overflow-hidden flex gap-2 items-center relative"
        >
          <select
            className="text-sm h-full w-full appearance-none px-2 outline-none border-none"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          >
            {CAL_YEARS.map((y) => (
              <option key={y} value={y} className="bg-bg-2">
                {y}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="w-5 h-5 text-text-2 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <Button
          variant="ghost"
          className="w-fit px-2 h-9 outline-none"
          onClick={() => {
            setSelectedMonth((prev) => {
              if (prev === 11) {
                setSelectedYear((prev) => prev + 1);
                return 0;
              }
              return prev + 1;
            });
          }}
        >
          <ChevronRightIcon className="w-5 h-5 text-text-2" />
        </Button>
      </div>

      <div
        className={cn("grid grid-cols-7 gap-y-2", containerMonthDaysClassName)}
      >
        {WEEK_DAYS.map((day) => (
          <p
            key={day[locale as keyof typeof day]}
            className="text-center text-text-2 text-sm p-2 font-normal"
          >
            {day[locale as keyof typeof day]}
          </p>
        ))}

        {days.map(({ date, currentMonth }) => {
          const isToday = date.isSame(today, "day");
          const isSelected = selected && date.isSame(dayjs(selected), "day");

          return (
            <Button
              variant="ghost"
              key={date.format("YYYY-MM-DD")}
              onClick={() => setSelected(date.toDate())}
              className={cn(
                "text-center outline-none text-text-1 justify-self-center text-sm w-full justify-center w-8 h-8 font-normal",
                !currentMonth && "text-text-2",
                isToday &&
                  "bg-gray-200 hover:bg-gray-300 text-text-1 font-medium",
                isSelected && "bg-primary-500 text-text-3 hover:bg-primary-400",
                buttonDayClassName,
              )}
            >
              {date.date()}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
