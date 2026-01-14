import { Meta, StoryObj } from "@storybook/react-vite";
import DayPicker from "../components/DayPicker";
import { useState } from "react";
import withColorSchema from "../decorators/withColorSchema";

const meta: Meta<typeof DayPicker> = {
  title: "Components/DayPicker",
  component: DayPicker,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof DayPicker>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    return <DayPicker selected={selected} setSelected={setSelected} />;
  },
};
