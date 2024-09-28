// Button.tsx
import * as React from "react";
import { LuLoader2 } from "react-icons/lu";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-1 active:brightness-90 text-sm disabled:pointer-events-none disabled:brightness-75 disabled:opacity-80 ",
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
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
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
      radius: "md",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
    unstyled?: boolean;
    loading?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      loading,
      disabled,
      asChild = false,
      unstyled = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";
    const appliedClasses = unstyled
      ? className
      : cn(buttonStyles({ variant, size, radius }), className);

    return (
      <Component
        className={appliedClasses}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading && (
          <LuLoader2 className="mr-2 h-5 w-5 animate-spin text-muted" />
        )}
        <Slottable>{loading ? "Loading..." : children}</Slottable>
      </Component>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonStyles };
