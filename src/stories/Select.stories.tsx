import type { Meta, StoryObj } from "@storybook/react-vite";
import withColorSchema from "@/decorators/withColorSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  decorators: [withColorSchema],
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
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
];

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Select>
        <SelectTrigger className="w-md">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem value={option.value}>{option.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
};
