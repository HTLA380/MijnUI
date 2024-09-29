"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, VariantProps } from "class-variance-authority";

import { cn, conditionalRender } from "@/utils";

const accordionStyles = cva("[&>div]:border-b [&>div]:border-b-main-border", {
  variants: {
    variant: {
      default: "",
      surface: "bg-surface px-4 pt-2 shadow-sm pb-4 rounded-xl",
      bordered: "border border-main-border rounded-xl px-4 pt-2 pb-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
    VariantProps<typeof accordionStyles>
>(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(accordionStyles({ variant }), className)}
    {...props}
  />
));

Accordion.displayName = "Accordion";

/* ------------------------------ AccordionItem ----------------------------- */

type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
> & {
  trigger: string | React.ReactNode;

  content?: string | React.ReactNode;
};

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, trigger, content, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("w-full", className)}
    {...props}
  >
    {conditionalRender(trigger, { component: AccordionTrigger })}
    {conditionalRender(content, { component: AccordionContent })}
  </AccordionPrimitive.Item>
));
AccordionItem.displayName = "AccordionItem";

/* ----------------------------- Util Components ---------------------------- */
/* ---------------------------- AccordionTrigger ---------------------------- */

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  icon?: React.ReactNode;
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, icon, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex w-full items-center justify-between py-3",
        className,
      )}
      {...props}
    >
      {children}

      {icon ? (
        icon
      ) : (
        <LuChevronDown className="duration-400 h-4 w-4 shrink-0 text-muted-text ease-in-out group-data-[state=open]:rotate-180" />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/* ---------------------------- AccordionContent ---------------------------- */

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-[height] data-[state=closed]:animate-accordion-collapse data-[state=open]:animate-accordion-expand"
    {...props}
  >
    <div className={cn("pb-3 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
