import type { Meta, StoryObj } from "@storybook/react-vite";
import PhoneInput from "@/components/PhoneInput";
import withColorSchema from "@/decorators/withColorSchema";
import { type ComponentProps, useState } from "react";

const meta: Meta<typeof PhoneInput> = {
  title: "Components/PhoneInput",
  component: PhoneInput,
  decorators: [withColorSchema],
  argTypes: {
    error: {
      control: "text",
    },
    phone: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    setPhone: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<
  Omit<ComponentProps<typeof PhoneInput>, "setPhone" | "phone">
>;

export const Default: Story = {
  args: {
    error: "Has error",
    placeholder: "Enter a phone number",
  },
  render: (args) => {
    const [value, setValue] = useState("+51");
    return (
      <div className="flex flex-col gap-2">
        <PhoneInput
          phone={value}
          setPhone={setValue}
          className="w-md"
          {...args}
        />
        <p className="text-sm text-center">Selected: {value}</p>
      </div>
    );
  },
};
