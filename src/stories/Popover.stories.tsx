import { Meta, StoryObj } from "@storybook/react-vite";
import Popover from "../components/Popover";
import Button from "../components/Button";
import withColorSchema from "../decorators/withColorSchema";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => {
    return (
      <Popover Trigger={<Button variant="outlined">Trigger</Button>}>
        <div>Content</div>
      </Popover>
    );
  },
};
