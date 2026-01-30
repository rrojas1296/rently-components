import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog, DialogContent, DialogTrigger } from "@/components/Dialog";
import withColorSchema from "@/decorators/withColorSchema";
import Button from "@/components/Button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>Content</DialogContent>
        </Dialog>
      </div>
    );
  },
};
