import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "@/components/Badge";
import withColorSchema from "@/decorators/withColorSchema";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Success: Story = {
  args: {
    type: "success",
    text: "Success",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    text: "Warning",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    text: "Error",
  },
};
