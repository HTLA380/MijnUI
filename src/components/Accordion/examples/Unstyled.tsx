import * as Accordion from "@radix-ui/react-accordion";

const UnstyledAccordion = () => (
  <Accordion.Root
    className="rounded-2xl border border-orange-500 p-4"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="my-2" value="item-1">
      <Accordion.Trigger className="w-full bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800">
        Is it accessible?
      </Accordion.Trigger>
      <Accordion.Content className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
        Yes. It adheres to the WAI-ARIA design pattern.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="my-2" value="item-2">
      <Accordion.Trigger className="w-full bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800">
        Is it unstyled?
      </Accordion.Trigger>
      <Accordion.Content className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
        Yes. It&apos;s unstyled by default, giving you freedom over the look and
        feel.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="my-2" value="item-3">
      <Accordion.Trigger className="w-full bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800">
        Can it be animated?
      </Accordion.Trigger>
      <Accordion.Content className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
        <div className="AccordionContentText">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default UnstyledAccordion;
