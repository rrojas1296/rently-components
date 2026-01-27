import { Toast as RadixToast } from "radix-ui";
import { cn } from "@/utils/cn";
import { AlertCircleIcon, CheckCircleIcon, XIcon } from "lucide-react";

const ToastProvider = (props: RadixToast.ToastProviderProps) => {
  return <RadixToast.Provider {...props} />;
};

type ToastType = "success" | "error" | "warning";

interface ToastProps extends RadixToast.ToastProps {
  toastType?: ToastType;
}

const Toast = ({
  className,
  toastType = "success",
  children,
  ...props
}: ToastProps) => {
  const icons: Record<ToastType, React.ReactNode> = {
    success: <CheckCircleIcon className="w-5 h-5 text-success shrink-0" />,
    error: <AlertCircleIcon className="w-5 h-5 text-danger shrink-0" />,
    warning: <AlertCircleIcon className="w-5 h-5 text-warning shrink-0" />,
  };
  return (
    <RadixToast.Root
      className={cn(
        "relative bg-bg-1 border border-border-2 rounded-lg px-5 py-2 text-sm m-auto text-text-1 w-xs md:w-sm shadow-md",
        "data-[state=open]:animate-slide-in data-[state=closed]:animate-hide",
        className,
      )}
      {...props}
    >
      <div className="absolute left-5 top-1/2 -translate-y-1/2 shrink-0">
        {icons[toastType]}
      </div>
      {children}
    </RadixToast.Root>
  );
};

const ToastViewport = ({
  className,
  ...props
}: RadixToast.ToastViewportProps) => {
  return (
    <RadixToast.Viewport
      className={cn(
        "fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-col p-5 w-full",
        className,
      )}
      {...props}
    />
  );
};

const ToastTitle = ({ className, ...props }: RadixToast.ToastTitleProps) => {
  return (
    <RadixToast.Title
      className={cn("ml-8 text-sm text-text-1", className)}
      {...props}
    />
  );
};

const ToastDescription = ({
  className,
  ...props
}: RadixToast.ToastDescriptionProps) => {
  return (
    <RadixToast.Description
      className={cn("ml-8 text-xs text-text-2 mr-7", className)}
      {...props}
    />
  );
};

const ToastClose = ({ className, ...props }: RadixToast.ToastCloseProps) => {
  return (
    <RadixToast.Close
      className={cn(
        "w-7 h-7 flex items-center absolute top-1/2 -translate-y-1/2 right-2 justify-center rounded-md p-1 text-text-2 hover:text-text-1 hover:bg-bg-2 transition-colors",
        className,
      )}
      {...props}
    >
      <XIcon className="w-4 h-4 shrink-0" />
    </RadixToast.Close>
  );
};

const ToastAction = ({ className, ...props }: RadixToast.ToastActionProps) => {
  return (
    <RadixToast.Action
      className={cn(" ", className)}
      style={{
        gridArea: "action",
      }}
      {...props}
    />
  );
};

export {
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  Toast,
};
