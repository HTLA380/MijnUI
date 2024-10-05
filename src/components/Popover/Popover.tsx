"use client";

import * as React from "react";
import * as RadixPopover from "@radix-ui/react-popover";

import { buttonStyles } from "@/components/Button";
import { UnstyledProps } from "@/types";
import { applyUnstyled, cn } from "@/utils";

const Popover = RadixPopover.Root;

const PopoverArrow = RadixPopover.Arrow;

const PopoverAnchor = RadixPopover.Anchor;

const PopoverClose = RadixPopover.Close;

/* ----------------------------- PopoverTrigger ----------------------------- */

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixPopover.Trigger
> &
  UnstyledProps;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Trigger>,
  PopoverTriggerProps
>(({ unstyled, className, ...props }) => {
  return (
    <RadixPopover.Trigger
      className={applyUnstyled(
        unstyled,
        buttonStyles({ variant: "surface" }),
        className,
      )}
      {...props}
    />
  );
});

PopoverTrigger.displayName = "PopoverTrigger";

/* ----------------------------- PopoverContent ----------------------------- */

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Content>,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Content>
>(
  (
    { className, align = "center", side = "bottom", sideOffset = 4, ...props },
    ref,
  ) => (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={ref}
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-full rounded-lg border border-main-border bg-surface p-4 text-surface-text shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-bottom-6 data-[side=left]:slide-in-from-left-6 data-[side=right]:slide-in-from-right-6 data-[side=top]:slide-in-from-top-6",
          className,
        )}
        {...props}
      />
    </RadixPopover.Portal>
  ),
);
PopoverContent.displayName = RadixPopover.Content.displayName;

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
};
