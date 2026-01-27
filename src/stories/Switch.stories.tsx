import type { Meta, StoryObj } from "@storybook/react-vite";
import Switch from "@/components/Switch";
import withColorSchema from "@/decorators/withColorSchema";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch onClick={() => setChecked(!checked)} checked={checked} />;
  },
};
