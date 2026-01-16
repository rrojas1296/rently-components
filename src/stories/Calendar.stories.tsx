import { Meta, StoryObj } from "@storybook/react-vite";
import withColorSchema from "../decorators/withColorSchema";
import Calendar from "../components/Calendar";
import { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    return (
      <div className="flex flex-col gap-4">
        <Calendar selected={selected} setSelected={setSelected} />
        <p className="text-center">Selected: {selected?.toISOString()}</p>
      </div>
    );
  },
};
