import Button from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlusIcon } from "lucide-react";
import withColorSchema from "@/decorators/withColorSchema";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Filled",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    children: <PlusIcon className="w-5 h-5" />,
  },
};
