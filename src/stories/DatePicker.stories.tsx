import { Meta, StoryObj } from "@storybook/react-vite";
import DatePicker from "../components/DatePicker";
import withColorSchema from "../decorators/withColorSchema";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(undefined);

    return (
      <DatePicker
        placeholder="Choose a date"
        className="w-sm"
        selected={selected}
        setSelected={setSelected}
      />
    );
  },
};
