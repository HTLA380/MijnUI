"use client"

import * as React from "react"
import {
  UnstyledProvider,
  useUnstyled,
} from "@/mijn-ui/context/UnstyledProvider"
import { UnstyledProps } from "@/mijn-ui/types"
import { buttonStyles } from "@/mijn-ui/ui/button"
import { applyUnstyled } from "@/mijn-ui/utils"
import * as RadixPopover from "@radix-ui/react-popover"

const PopoverArrow = RadixPopover.Arrow

const PopoverAnchor = RadixPopover.Anchor

type PopoverProps = React.ComponentProps<typeof RadixPopover.Root> &
  UnstyledProps

const Popover = ({ unstyled = false, ...props }: PopoverProps) => {
  return (
    <UnstyledProvider unstyled={unstyled}>
      <RadixPopover.Root {...props} />
    </UnstyledProvider>
  )
}

/* ----------------------------- PopoverTrigger ----------------------------- */

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixPopover.Trigger
> &
  UnstyledProps

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Trigger>,
  PopoverTriggerProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixPopover.Trigger
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({ variant: "surface" }),
        className,
      )}
      {...props}
    />
  )
})

PopoverTrigger.displayName = RadixPopover.PopoverTrigger.displayName

/* ----------------------------- PopoverClose ----------------------------- */

type PopoverCloseProps = React.ComponentPropsWithoutRef<
  typeof RadixPopover.Close
> &
  UnstyledProps

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Close>,
  PopoverCloseProps
>(({ unstyled, className, ...props }, ref) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <RadixPopover.Close
      ref={ref}
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({ variant: "ghost" }),
        className,
      )}
      {...props}
    />
  )
})

PopoverClose.displayName = RadixPopover.PopoverClose.displayName

/* ----------------------------- PopoverContent ----------------------------- */

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Content>,
  React.ComponentPropsWithoutRef<typeof RadixPopover.Content> & UnstyledProps
>(
  (
    {
      unstyled,
      className,
      align = "center",
      side = "bottom",
      sideOffset = 4,
      ...props
    },
    ref,
  ) => {
    const { unstyled: contextUnstyled } = useUnstyled()
    const isUnstyled = unstyled ?? contextUnstyled

    return (
      <RadixPopover.Portal>
        <RadixPopover.Content
          ref={ref}
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={applyUnstyled(
            isUnstyled,
            "z-50 w-full rounded-lg border border-border bg-surface p-4 text-surface-foreground shadow-md outline-none !duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-bottom-6 data-[side=left]:slide-in-from-left-6 data-[side=right]:slide-in-from-right-6 data-[side=top]:slide-in-from-top-6",
            className,
          )}
          {...props}
        />
      </RadixPopover.Portal>
    )
  },
)
PopoverContent.displayName = RadixPopover.Content.displayName

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
}
