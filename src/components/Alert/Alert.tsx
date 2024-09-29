import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn, conditionalRender } from "@/utils";

// CVA Styles
const alertStyles = cva(
  "relative rounded-lg w-full py-4 px-3 [&>span~*]:pl-8 border-main-border border [&>svg]:text-main-text [&>div]:translate-y-[-3px]",
  {
    variants: {
      variant: {
        filled: "border-0",
        outline: "border",
      },
      status: {
        success: "",
        default:
          "border border-main-border text-main-text [&>svg]:text-main-text",
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
      status: "default",
    },
  },
);

export type AlertProps = Omit<React.ComponentProps<"div">, "title"> &
  VariantProps<typeof alertStyles> & {
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    icon?: React.ReactNode;
  };

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, status, className, title, description, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(alertStyles({ variant, status, className }))}
      >
        {icon && <AlertIcon>{icon}</AlertIcon>}
        {conditionalRender(title, { component: AlertTitle })}
        {conditionalRender(description, { component: AlertDescription })}
      </div>
    );
  },
);

Alert.displayName = "Alert";

/* -------------------------------------------------------------------------- */

const AlertIcon = ({ className, ...props }: React.ComponentProps<"span">) => {
  return (
    <span
      className={cn(
        "translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-5 [&>svg]:w-5",
        className,
      )}
      {...props}
    />
  );
};

const AlertTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h5
      {...props}
      className={cn("w-full text-base font-semibold leading-none", className)}
    />
  );
};

const AlertDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn("mt-1 text-sm", className)} {...props} />;
};

export { Alert, AlertDescription, AlertIcon, alertStyles, AlertTitle };
