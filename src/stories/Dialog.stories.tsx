import type { Meta, StoryObj } from "@storybook/react-vite";
import Dialog from "@/components/Dialog";
import withColorSchema from "@/decorators/withColorSchema";
import { useState } from "react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          trigger={<button>Open</button>}
        >
          Content
        </Dialog>
      </div>
    );
  },
};
