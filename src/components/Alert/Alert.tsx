import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const alertStyles = cva(
  "relative rounded-lg py-4 px-3 [&>span~*]:pl-8 border-main-border border [&>svg]:text-main-text w-96 [&>div]:translate-y-[-3px]",
  {
    variants: {
      variant: {
        filled: "border-0",
        outline: "border",
      },
      status: {
        success: "",
        info: "border border-main-border text-main-text [&>svg]:text-main-text",
        warning: "",
        danger: "",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        status: "success",
        className:
          "bg-success dark:bg-success/80 text-success-text [&>svg]:text-success-text",
      },
      {
        variant: "filled",
        status: "warning",
        className:
          "bg-warning dark:bg-warning/80 text-warning-text [&>svg]:text-warning-text",
      },
      {
        variant: "filled",
        status: "danger",
        className:
          "bg-danger dark:bg-danger/80 text-danger-text [&>svg]:text-danger-text",
      },
      {
        variant: "outline",
        status: "success",
        className: "border-success text-success [&>svg]:text-success",
      },
      {
        variant: "outline",
        status: "warning",
        className: "border-warning text-warning [&>svg]:text-warning ",
      },
      {
        variant: "outline",
        status: "danger",
        className: "border-danger text-danger [&>svg]:text-danger",
      },
    ],
    defaultVariants: {
      variant: "filled",
      status: "info",
    },
  },
);

type AlertProps = React.ComponentProps<"div"> &
  VariantProps<typeof alertStyles>;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, status, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(alertStyles({ variant, status, className }))}
      />
    );
  },
);

Alert.displayName = "Alert";

const AlertIcon = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      {...props}
      className={cn(
        "translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-5 [&>svg]:w-5",
        className,
      )}
    />
  );
});

AlertIcon.displayName = "AlertIcon";

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      {...props}
      className={cn("w-full text-base font-semibold leading-none", className)}
    />
  );
});

AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-1 text-sm", className)} {...props} />
));

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertIcon, AlertTitle };
