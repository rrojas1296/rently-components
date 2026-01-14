import dayjs, { Dayjs } from "dayjs";

export interface CalendarDay {
  date: Dayjs;
  currentMonth: boolean;
}

export const generateDays = (month: number, year: number) => {
  const startMonth = dayjs().year(year).month(month).startOf("month");
  const endMonth = dayjs().year(year).month(month).endOf("month");

  const startWeekDay = startMonth.day();

  const days: CalendarDay[] = [];

  for (let i = 0; i < startWeekDay; i++) {
    days.push({
      date: startMonth.subtract(startWeekDay - i, "day"),
      currentMonth: false,
    });
  }

  for (let i = 1; i <= endMonth.date(); i++) {
    days.push({
      date: dayjs().year(year).month(month).date(i),
      currentMonth: true,
    });
  }

  const totalDays = days.length;
  const remainingDays = 42 - totalDays;

  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: endMonth.add(i, "day"),
      currentMonth: false,
    });
  }
  return days;
};

const currentYear = dayjs().year();

export const CAL_YEARS = Array.from({ length: 120 }, (_, i) => {
  return dayjs()
    .year(currentYear - 60 + i)
    .year();
});
export const CAL_MONTHS = [
  {
    en: "Jan",
    es: "Ene",
  },
  {
    en: "Feb",
    es: "Feb",
  },
  {
    en: "Mar",
    es: "Mar",
  },
  {
    en: "Apr",
    es: "Abr",
  },
  {
    en: "May",
    es: "May",
  },
  {
    en: "Jun",
    es: "Jun",
  },
  {
    en: "Jul",
    es: "Jul",
  },
  {
    en: "Aug",
    es: "Ago",
  },
  {
    en: "Sep",
    es: "Sep",
  },
  {
    en: "Oct",
    es: "Oct",
  },
  {
    en: "Nov",
    es: "Nov",
  },
  {
    en: "Dec",
    es: "Dic",
  },
];

export const WEEK_DAYS = [
  {
    en: "Su",
    es: "Do",
  },
  {
    en: "Mo",
    es: "Lu",
  },
  {
    en: "Tu",
    es: "Ma",
  },
  {
    en: "We",
    es: "Mi",
  },
  {
    en: "Th",
    es: "Ju",
  },
  {
    en: "Fr",
    es: "Vi",
  },
  {
    en: "Sa",
    es: "Sa",
  },
];
