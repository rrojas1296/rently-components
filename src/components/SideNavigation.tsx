import type { ComponentType, SVGProps } from "react";
import { cn } from "@/utils/cn";

interface Option {
  label: string;
  onClick: () => void;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
interface Props {
  sections: {
    id: number;
    title: string;
    options: Option[];
  }[];
  pathname: string;
  open: boolean;
  containerClassName?: string;
  overlayClassName?: string;
  textHeader?: string;
  IconHeader: ComponentType<SVGProps<SVGSVGElement>>;
  setOpen: (open: boolean) => void;
}
const SideNavigation = ({
  sections,
  containerClassName,
  pathname,
  open,
  textHeader,
  IconHeader,
  overlayClassName,
  setOpen,
}: Props) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 inset-0 shrink-0 overflow-y-auto overflow-x-hidden z-50 transition-all",
        open
          ? "pointer-events-auto lg:w-72"
          : "pointer-events-none lg:pointer-events-auto lg:w-21",
        containerClassName,
      )}
    >
      <div
        className={cn(
          "bg-overlay w-full h-full transition-opacity lg:hidden backdrop-blur-xs",
          open ? "opacity-100" : "opacity-0",
          overlayClassName,
        )}
        onClick={() => setOpen(false)}
      />

      <nav
        className={cn(
          "absolute px-5 w-72 py-5 top-0 shrink-0 transition-all left-0 h-full bg-bg-1 lg:border-r lg:border-r-border-2",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-21",
        )}
      >
        <div className="flex gap-3 items-center mb-7">
          <div className="w-11 h-10 rounded-lg bg-primary-500 shrink-0 flex items-center justify-center">
            {<IconHeader className="w-5 h-5 text-text-3" />}
          </div>
          <span
            className={cn(
              "text-text-1 transition-opacity font-bold text-2xl",
              open ? "opacity-100" : "opacity-0",
            )}
          >
            {textHeader}
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map(({ options, title, id }) => {
            return (
              <section key={id}>
                <p
                  className={cn(
                    "mb-2 text-text-2 text-sm transition-opacity",
                    open ? "opacity-100" : "opacity-0",
                  )}
                >
                  {title}
                </p>
                {options.map(({ label, href, Icon, onClick }, i) => {
                  const isActive = pathname.startsWith(href);
                  return (
                    <button
                      key={i}
                      onClick={onClick}
                      className={cn(
                        "h-10 w-full group transition-[width] rounded-lg overflow-hidden text-sm text-text-2 px-3 cursor-pointer flex items-center gap-3",
                        "hover:text-text-1 transition-[color]",
                        isActive &&
                          "bg-primary-500 text-text-3 hover:text-text-3",
                        open ? "w-full" : "w-11",
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5 text-text-2 group-hover:text-text-1 transition-colors shrink-0",
                          isActive && "text-text-3 group-hover:text-text-3",
                        )}
                      />
                      <p
                        className={cn(
                          "transition-opacity",
                          open ? "opacity-100" : "opacity-0",
                        )}
                      >
                        {label}
                      </p>
                    </button>
                  );
                })}
              </section>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default SideNavigation;
