import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "@/components/Input";
import { MailIcon } from "lucide-react";
import withColorSchema from "@/decorators/withColorSchema";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    Icon: {
      control: {
        type: "boolean",
      },
    },
    inputClassName: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    error: "",
    Icon: MailIcon,
  },
  render: (args) => {
    const { error, Icon } = args;
    return (
      <Input
        placeholder="Placeholder"
        className="w-sm"
        error={error}
        Icon={Icon}
      />
    );
  },
};
