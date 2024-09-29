import { StoryObj } from "@storybook/react";

import UnstyledAccordion from "@/components/Accordion/examples/Unstyled";
import UnstyledAccordionSourceCode from "@/components/Accordion/examples/Unstyled.tsx?raw";

import CustomIcon from "./examples/CustomIcon";
import CustomIconSourceCode from "./examples/CustomIcon.tsx?raw";
import { Accordion, AccordionItem } from "./Accordion";
import AccordionSourceCode from "./Accordion.tsx?raw";

/**
 * There are two types of accordions: `single` and `multiple`.
 *
 * - `single`: Only one accordion item can be expanded at a time. When a new item is expanded, the previously expanded item will be collapsed.
 * - `multiple`: Multiple accordion items can be expanded simultaneously.
 *
 * <a href="https://www.radix-ui.com/primitives/docs/components/accordion#api-reference" rel="noopener noreferrer"><u>Api Reference</u></a>
 * <br>
 * <a href="https://www.radix-ui.com/primitives/docs/components/accordion" rel="noopener noreferrer"><u>Documentation</u></a>
 */

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    type: "single",
    collapsible: true,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Accordion className="w-full max-w-80" {...args}>
        <AccordionItem
          className="w-full"
          trigger="Is it accessible"
          content="Yes. It adheres to the WAI-ARIA design pattern."
          value="item-1"
        />
      </Accordion>
    );
  },
  parameters: {
    docs: {
      source: {
        code: AccordionSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: (args) => {
    return (
      <Accordion className="w-full max-w-80" {...args}>
        <AccordionItem
          className="w-full"
          trigger="Is it accessible"
          content="Yes. It adheres to the WAI-ARIA design pattern."
          value="item-1"
        />
      </Accordion>
    );
  },
};

export const Custom_Icon: Story = {
  render: () => <CustomIcon />,
  parameters: {
    docs: {
      source: {
        code: CustomIconSourceCode,
      },
    },
  },
};

/**
 * Available variants:
 * **default** | **surface** | **bordered**
 */
export const Variants: Story = {
  render: (args) => {
    return (
      <>
        <Accordion className="w-full max-w-96" variant={"default"} {...args}>
          <AccordionItem
            className="w-full"
            trigger="Is it accessible"
            content="Yes. It adheres to the WAI-ARIA design pattern."
            value="item-1"
          />
          <AccordionItem
            className="w-full"
            trigger="Is it unstyled?"
            content="Yes. It's unstyled by default, giving you freedom over the look and feel."
            value="item-2"
          />
        </Accordion>

        <Accordion className="w-full max-w-96" variant={"surface"} {...args}>
          <AccordionItem
            className="w-full"
            trigger="Is it accessible"
            content="Yes. It adheres to the WAI-ARIA design pattern."
            value="item-1"
          />
          <AccordionItem
            className="w-full"
            trigger="Is it unstyled?"
            content="Yes. It's unstyled by default, giving you freedom over the look and feel."
            value="item-2"
          />
        </Accordion>

        <Accordion className="w-full max-w-96" variant={"bordered"} {...args}>
          <AccordionItem
            className="w-full"
            trigger="Is it accessible"
            content="Yes. It adheres to the WAI-ARIA design pattern."
            value="item-1"
          />
          <AccordionItem
            className="w-full"
            trigger="Is it unstyled?"
            content="Yes. It's unstyled by default, giving you freedom over the look and feel."
            value="item-2"
          />
        </Accordion>
      </>
    );
  },

  decorators: [
    (Story) => (
      <div className="flex w-full flex-col items-center justify-center gap-5 overflow-y-auto py-10">
        <Story />
      </div>
    ),
  ],
};

export const SingleExpand: Story = {
  render: (args) => {
    return (
      <Accordion className="w-full max-w-80" {...args}>
        <AccordionItem
          className="w-full"
          trigger="Is it accessible"
          content="Yes. It adheres to the WAI-ARIA design pattern."
          value="item-1"
        />
        <AccordionItem
          className="w-full"
          trigger="Is it unstyled?"
          content="Yes. It's unstyled by default, giving you freedom over the look and feel."
          value="item-2"
        />
        <AccordionItem
          className="w-full"
          trigger="Can it be animated?"
          content=" Yes! You can animate the Accordion with CSS or JavaScript."
          value="item-3"
        />
      </Accordion>
    );
  },
};

export const MultipleExpand: Story = {
  args: {
    type: "multiple",
  },
  render: (args) => {
    return (
      <Accordion className="w-full max-w-80" {...args}>
        <AccordionItem
          className="w-full"
          trigger="Is it accessible"
          content="Yes. It adheres to the WAI-ARIA design pattern."
          value="item-1"
        />
        <AccordionItem
          className="w-full"
          trigger="Is it unstyled?"
          content="Yes. It's unstyled by default, giving you freedom over the look and feel."
          value="item-2"
        />
        <AccordionItem
          className="w-full"
          trigger="Can it be animated?"
          content=" Yes! You can animate the Accordion with CSS or JavaScript."
          value="item-3"
        />
      </Accordion>
    );
  },
};

/**
 * Note: Since <strong>MijnUI</strong> is built on top of <a href="https://www.radix-ui.com/primitives" rel="noopener noreferrer" target="_blank"><u>Radix Primitives</u></a>, you can use Radix unstyled components if you prefer unstyled components. <br>
 * Here is an example of how you could create unstyled components with basic styling.
 * If you want these to be completely unstyled, you can remove all the TailwindCss classes.
 * For more details, please refer to the API reference.
 */

export const Unstyled: Story = {
  /* eslint-disable-next-line */
  render: (_) => <UnstyledAccordion />,
  parameters: {
    docs: {
      source: {
        code: UnstyledAccordionSourceCode,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};
