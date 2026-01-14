import type { ComponentProps } from "react";
import { DayPicker as ReactDayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/style.css";

const DayPicker = ({
  selected,
  setSelected,
  ...other
}: ComponentProps<typeof ReactDayPicker>) => {
  return (
    <ReactDayPicker
      animate
      mode={mode}
      selected={selected}
      onSelect={setSelected}
      className="bg-bg-1 p-4 rounded-lg"
      classNames={{
        chevron: "text-text-1",
        today: "text-primary-400 font-bold",
        weekday: "text-sm text-text-2 font-normal",
        month: "flex flex-col gap-2",
        root: "w-fit",
      }}
      components={{
        DayButton: ({ day, ...other }) => (
          <button
            {...other}
            className="rounded-lg hover:bg-bg-2 cursor-pointer text-sm bg-bg-1 h-8 w-8"
          >
            {day.date.getDate()}
          </button>
        ),
      }}
      {...other}
    />
  );
};

export default DayPicker;
