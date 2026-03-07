import { COUNTRY_CODES } from "../constants/countries";
import Input from "./Input";
import { cn } from "@/utils/cn";
import { Select } from "@/components/Select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

interface Props {
  placeholder: string;
  phone: string;
  setPhone: (value: string) => void;
  className?: string;
  error?: string;
}

const PhoneInput = ({
  placeholder,
  phone,
  setPhone,
  error,
  className,
}: Props) => {
  const code = phone.split(" ")[0] || "";
  const number = phone.split(" ")[1] || "";
  const flag = COUNTRY_CODES.find(
    (cc) => cc.code === phone.split(" ")[0],
  )?.flag;
  const v = `${flag} ${code}`;

  return (
    <div className={cn("flex gap-5", className)}>
      <Select
        value={phone.split(" ")[0]}
        onValueChange={(code) => setPhone(`${code} ${number}`)}
      >
        <SelectTrigger error={error} className="w-30">
          <SelectValue placeholder="+51">
            <span className="gap-2 flex">{v}</span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="w-52 max-w-none">
          {COUNTRY_CODES.map(({ code: c, flag, name }) => {
            const isSelected = c === code;
            return (
              <SelectItem
                value={c}
                key={c}
                showIndicator={false}
                className={cn(
                  "px-2 text-text-1 py-2 bg-bg-1 rounded-lg hover:bg-bg-2 items-center text-sm cursor-pointer",
                  isSelected && "bg-bg-2",
                )}
              >
                <div className="w-full flex items-center justify-between">
                  <p className="flex gap-2">
                    <span> {flag}</span>
                    <span> {name}</span>
                  </p>
                  <p>{c}</p>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      <Input
        placeholder={placeholder}
        value={number}
        error={error}
        onChange={(e) => {
          setPhone(`${code} ${e.target.value}`);
        }}
        className="flex-1"
        type="number"
      />
    </div>
  );
};

export default PhoneInput;
