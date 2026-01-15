import { Meta, StoryObj } from "@storybook/react-vite";
import PhoneInput from "../components/PhoneInput";
import withColorSchema from "../decorators/withColorSchema";
import { useState } from "react";

const meta: Meta<typeof PhoneInput> = {
  title: "Components/PhoneInput",
  component: PhoneInput,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("+51");
    return (
      <div className="flex flex-col gap-2">
        <PhoneInput
          placeholder="999999999"
          selected={value}
          setSelected={setValue}
        />
        <p className="text-sm text-center">Selected: {value}</p>
      </div>
    );
  },
};
