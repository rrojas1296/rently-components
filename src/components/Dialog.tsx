import { Dialog as RadixDialog } from "radix-ui";
import { cn } from "@/utils/cn";
import { XIcon } from "lucide-react";
import type { ComponentProps } from "react";

const Dialog = (props: RadixDialog.DialogProps) => {
  return <RadixDialog.Root {...props} />;
};

const DialogTrigger = ({
  className,
  ...props
}: RadixDialog.DialogTriggerProps) => {
  return <RadixDialog.Trigger className={className} {...props} />;
};

const DialogPortal = (props: RadixDialog.DialogPortalProps) => {
  return <RadixDialog.Portal {...props} />;
};

const DialogOverlay = ({
  className,
  ...props
}: RadixDialog.DialogOverlayProps) => {
  return (
    <RadixDialog.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-overlay",
        "data-[state=open]:animate-overlay-in data-[state=closed]:animate-overlay-out",
        className,
      )}
      {...props}
    />
  );
};

const DialogContent = ({
  className,
  children,
  ...props
}: RadixDialog.DialogContentProps) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <RadixDialog.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2",
          "bg-bg-1 border border-border-2 rounded-xl p-6 shadow-lg",
          "data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out",
          "focus:outline-none",
          className,
        )}
        {...props}
      >
        {children}
      </RadixDialog.Content>
    </DialogPortal>
  );
};

const DialogHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("flex flex-col gap-1.5 mb-4", className)} {...props} />
  );
};

const DialogFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("flex justify-end gap-3 mt-6", className)} {...props} />
  );
};

const DialogTitle = ({ className, ...props }: RadixDialog.DialogTitleProps) => {
  return (
    <RadixDialog.Title
      className={cn("text-lg font-semibold text-text-1", className)}
      {...props}
    />
  );
};

const DialogDescription = ({
  className,
  ...props
}: RadixDialog.DialogDescriptionProps) => {
  return (
    <RadixDialog.Description
      className={cn("text-sm text-text-2", className)}
      {...props}
    />
  );
};

const DialogClose = ({
  className,
  children,
  ...props
}: RadixDialog.DialogCloseProps) => {
  return (
    <RadixDialog.Close
      className={cn(
        "absolute right-4 top-4 rounded-md p-1 text-text-2 hover:text-text-1 hover:bg-bg-2 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-border-1/80",
        className,
      )}
      {...props}
    >
      {children ?? <XIcon className="h-4 w-4" />}
    </RadixDialog.Close>
  );
};

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
