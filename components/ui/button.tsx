import { VariantProps, cva } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";
import { LoadingSpinner } from "./icons";
import { Tooltip } from "./tooltip";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("transition-all", {
  variants: {
    variant: {
      primary:
        "mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-neutral-200 border-black bg-black text-white hover:bg-neutral-800 rounded-md",
      secondary: cn(
        "mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-neutral-200 border-neutral-200 bg-white hover:border-neutral-400 hover:text-neutral-800 text-neutral-500 rounded-md"
      ),
      small: "mx-auto max-w-fit border px-5 h-8 items-center flex text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-neutral-200 border-black bg-black text-white hover:bg-neutral-800 rounded-md",
      outline: "border-transparent text-content-default hover:bg-bg-subtle",
      success:
        "border-blue-500 bg-blue-500 text-white hover:bg-blue-600 hover:ring-4 hover:ring-blue-100",
      danger:
        "border-red-500 bg-red-500 text-white hover:bg-red-600 hover:ring-4 hover:ring-red-100",
      "danger-outline":
        "border-transparent bg-white text-red-500 hover:bg-red-600 hover:text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: ReactNode | string;
  textWrapperClassName?: string;
  shortcutClassName?: string;
  loading?: boolean;
  icon?: ReactNode;
  shortcut?: string;
  right?: ReactNode;
  disabledTooltip?: string | ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      variant = "primary",
      className,
      textWrapperClassName,
      shortcutClassName,
      loading,
      icon,
      shortcut,
      disabledTooltip,
      right,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    if (disabledTooltip) {
      return (
        <Tooltip content={disabledTooltip}>
          <div
            className={cn(
              "flex h-10 w-full cursor-not-allowed items-center justify-center gap-x-2 rounded-md border border-neutral-200 bg-neutral-100 px-4 text-sm text-neutral-400 transition-all focus:outline-none",
              {
                "border-transparent bg-transparent":
                  variant?.endsWith("outline"),
              },
              className
            )}
          >
            {icon}
            {text && (
              <div
                className={cn(
                  "min-w-0 truncate",
                  shortcut && "flex-1 text-left",
                  textWrapperClassName
                )}
              >
                {text}
              </div>
            )}
            {shortcut && (
              <kbd
                className={cn(
                  "hidden rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-xs font-light text-neutral-400 md:inline-block",
                  {
                    "bg-neutral-100": variant?.endsWith("outline"),
                  },
                  shortcutClassName
                )}
              >
                {shortcut}
              </kbd>
            )}
          </div>
        </Tooltip>
      );
    }
    return (
      <button
        ref={forwardedRef}
        // if onClick is passed, it's a "button" type, otherwise it's being used in a form, hence "submit"
        type={props.onClick ? "button" : "submit"}
        className={cn(
          "group flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 text-sm",
          props.disabled || loading
            ? "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400 outline-none"
            : buttonVariants({ variant }),
          className
        )}
        disabled={props.disabled || loading}
        {...props}
      >
        {loading ? <LoadingSpinner /> : icon ? icon : null}
        {text && (
          <div
            className={cn(
              "min-w-0 truncate",
              shortcut && "flex-1 text-left",
              textWrapperClassName
            )}
          >
            {text}
          </div>
        )}
        {shortcut && (
          <kbd
            className={cn(
              "hidden rounded px-2 py-0.5 text-xs font-light transition-all duration-75 md:inline-block",
              {
                "bg-neutral-700 text-neutral-400 group-hover:bg-neutral-600 group-hover:text-neutral-300":
                  variant === "primary",
                "bg-neutral-200 text-neutral-400 group-hover:bg-neutral-100 group-hover:text-neutral-500":
                  variant === "secondary",
                "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200":
                  variant === "outline",
                "bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white":
                  variant === "danger-outline",
              },
              shortcutClassName
            )}
          >
            {shortcut}
          </kbd>
        )}
        {right}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
