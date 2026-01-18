import type { Meta, StoryObj } from "@storybook/react-vite";
import withColorSchema from "../decorators/withColorSchema";
import Select from "../components/Select";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    error: {
      type: "string",
      control: "text",
    },
    placeholder: {
      type: "string",
      control: "text",
    },
    value: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    contentClassName: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: "Select an item",
    error: "",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
      { value: "6", label: "Option 6" },
      { value: "7", label: "Option 7" },
      { value: "8", label: "Option 8" },
      { value: "9", label: "Option 9" },
      { value: "10", label: "Option 10" },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Select
        className="w-md"
        contentClassName="w-full"
        onChange={(value) => setValue(value)}
        value={value}
        {...args}
      />
    );
  },
};
