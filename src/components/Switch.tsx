import { Switch as RadixSwitch } from "radix-ui";

type SwitchProps = RadixSwitch.SwitchProps;

const Switch = (props: SwitchProps) => {
  return (
    <RadixSwitch.Root
      className="h-6 w-10 bg-bg-1 rounded-full relative cursor-pointer data-[state=checked]:bg-primary-500 border-border-2 border"
      {...props}
    >
      <RadixSwitch.Thumb className="transition-transform will-change-transform block w-5 h-5 bg-text-2 rounded-full translate-x-0.5 data-[state=checked]:translate-x-4 data-[state=checked]:bg-text-3" />
    </RadixSwitch.Root>
  );
};

export default Switch;
