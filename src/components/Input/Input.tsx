"use client";

import * as React from "react";
import { IconType } from "react-icons";

import { Label } from "@/components/Label";
import { cn } from "@/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  startIcon?: IconType;
  endIcon?: IconType;
  label?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      startIcon: StartIcon,
      endIcon: EndIcon,
      label,
      id = React.useId(),
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative w-full">
        {StartIcon && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 transform">
            <StartIcon size={16} className="text-muted-text" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "peer flex h-10 w-full rounded-md border border-input-border bg-main px-3 py-2 text-sm ring-offset-main file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-text autofill:shadow-[inset_0_0_0px_1000px_rgb(var(--surface))] autofill:[-webkit-text-fill-color:rgb(var(--main-text))_!important] focus-visible:border-main-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-main-text focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            StartIcon ? "pl-8" : "",
            EndIcon ? "pr-8" : "",
            className,
          )}
          ref={ref}
          id={id}
          placeholder=" "
          {...props}
        />

        <Label
          className={cn(
            "absolute start-2 top-2 z-10 max-w-fit origin-[0] -translate-y-4 scale-75 transform cursor-text bg-main px-2 text-sm text-muted-text duration-300",
            StartIcon || EndIcon
              ? "rtl:left start-2 top-2 -translate-y-4 scale-75 bg-main px-2 rtl:translate-x-1/4"
              : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:start-2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-main peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
            className,
          )}
          htmlFor={id}
        >
          {label}
        </Label>

        {EndIcon && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 transform">
            <EndIcon className="text-muted-text" size={16} />
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
