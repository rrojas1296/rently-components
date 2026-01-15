import { useState } from "react";
import { COUNTRY_CODES } from "../constants/countries";
import Input from "./Input";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { cn } from "../utils/cn";
import Popover from "./Popover";

interface Props {
  placeholder: string;
  selected: string;
  setSelected: (value: string) => void;
}

const PhoneInput = ({ placeholder, selected, setSelected }: Props) => {
  const [open, setOpen] = useState(false);
  const flag = COUNTRY_CODES.find(
    (cc) => cc.code === selected.split(" ")[0],
  )?.flag;

  return (
    <div className="border border-border-1 rounded-lg bg-bg-1 h-10 min-w-md flex overflow-hidden">
      <Popover
        open={open}
        setOpen={setOpen}
        className="p-0 h-62 overflow-y-auto custom-scrollbar"
        align="start"
        Trigger={
          <button
            onClick={() => setOpen(true)}
            className="h-full px-3 cursor-pointer flex gap-3 items-center outline-none hover:bg-bg-2"
          >
            {flag}
            <ChevronDownIcon className="w-5 h-5 text-text-2" />
          </button>
        }
      >
        {COUNTRY_CODES.map((cc) => {
          const isSelected = cc.code === selected.split(" ")[0];
          return (
            <div
              key={cc.code}
              onClick={() => {
                const number = selected.split(" ")[1];
                setSelected(`${cc.code} ${number}`);
                setOpen(false);
              }}
              className={cn(
                "px-2 py-2 bg-bg-1 rounded-lg hover:bg-bg-2 justify-between items-center text-sm cursor-pointer flex",
                isSelected && "bg-bg-2",
              )}
            >
              {
                <span>
                  {cc.flag} {cc.name}
                </span>
              }
              {isSelected && <CheckIcon className="w-3 h-3 text-text-2" />}
            </div>
          );
        })}
      </Popover>

      <Input
        placeholder={placeholder}
        value={selected.split(" ")[1]}
        onChange={(e) => {
          const code = selected.split(" ")[0];
          setSelected(`${code} ${e.target.value}`);
        }}
        containerClassName="w-full border-none h-full focus-within:ring-0"
        type="number"
      />
    </div>
  );
};

export default PhoneInput;
