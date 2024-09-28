import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-1 rounded-md text-sm disabled:bg-disabled disabled:text-disabled-text",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-text hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-text hover:bg-secondary/90",
        outline:
          "border border-main-border hover:bg-accent hover:text-accent-text",
        danger: "bg-danger text-danger-text hover:bg-danger/90",
        ghost: "hover:bg-accent hover:text-accent-text",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(buttonStyles({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonStyles };
