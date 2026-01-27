import Stepper from "@/components/Stepper";
import type { Meta, StoryObj } from "@storybook/react-vite";
import withColorSchema from "@/decorators/withColorSchema";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    steps: [
      { label: "Basic data" },
      { label: "Apartment Details" },
      { label: "Personal information" },
    ],
    currentStep: 0,
  },
  render: (args) => {
    return <Stepper className="w-102" {...args} />;
  },
};
