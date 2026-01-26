import { Meta, StoryObj } from "@storybook/react-vite";
import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../components/Toast";
import withColorSchema from "../decorators/withColorSchema";
import Button from "../components/Button";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <ToastProvider duration={20000}>
        <Button
          onClick={() => {
            setOpen(false);
            setTimeout(() => {
              setOpen(true);
            }, 100);
          }}
        >
          Trigger
        </Button>
        <Toast toastType="error" open={open} onOpenChange={setOpen}>
          <ToastTitle>Incorrect password</ToastTitle>
          <ToastDescription>
            Incorrect password genereted to preview a large text
          </ToastDescription>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};
