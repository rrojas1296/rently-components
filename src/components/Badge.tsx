import { cn } from "@/utils/cn";

export type BadgeType = "success" | "error" | "warning";

interface Props {
  text: string;
  type: BadgeType;
}

const Badge = ({ text = "Badge", type = "success" }: Props) => {
  const styles: Record<BadgeType, string> = {
    success: "bg-bg-success text-success border-success",
    error: "bg-bg-danger text-danger border-danger",
    warning: "bg-bg-warning text-warning border-warning",
  };
  return (
    <div
      className={cn(
        "text-sm px-3 w-fit py-1 rounded-lg border outline-none",
        styles[type],
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
