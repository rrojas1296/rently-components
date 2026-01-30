import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePicker from "@/components/DatePicker";
import withColorSchema from "@/decorators/withColorSchema";
import { type ComponentProps, useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  decorators: [withColorSchema],
  argTypes: {
    setDate: {
      type: "function",
      table: {
        disable: true,
      },
    },
    placeholder: {
      type: "string",
    },
    date: {
      table: {
        disable: true,
      },
    },
    Icon: {
      table: {
        disable: true,
      },
    },
    disableFuture: {
      type: "boolean",
    },
    disablePast: {
      type: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<Omit<ComponentProps<typeof DatePicker>, "setDate">>;

export const Default: Story = {
  args: {
    error: "",
    placeholder: "Choose a date",
    disableFuture: false,
    disablePast: false,
  },
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
      <DatePicker className="w-sm" date={date} setDate={setDate} {...args} />
    );
  },
};
