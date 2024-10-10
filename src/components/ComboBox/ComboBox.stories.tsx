import { LuSearch } from "react-icons/lu";
import { Meta, StoryObj } from "@storybook/react";

import {
  ComboBox,
  ComboBoxContent,
  ComboBoxGroup,
  ComboBoxItem,
  ComboBoxTrigger,
} from "@/components/ComboBox";
import ComboBoxSourceCode from "@/components/ComboBox/ComboBox.tsx?raw";
import ComboBoxExample from "@/components/ComboBox/Examples/ComboBoxExample";
import ComboBoxExampleSourceCode from "@/components/ComboBox/Examples/ComboBoxExample.tsx?raw";
import ComboBoxWithScrollArea from "@/components/ComboBox/Examples/ComboBoxExample2";
import ComboBoxWithScrollAreaSourceCode from "@/components/ComboBox/Examples/ComboBoxExample2.tsx?raw";
import ComboBoxWithDialog from "@/components/ComboBox/Examples/ComboBoxExample3";
import ComboBoxWithDialogSourceCode from "@/components/ComboBox/Examples/ComboBoxExample3.tsx?raw";
import { Input } from "@/components/Input";
import { ScrollArea } from "@/components/ScrollArea";

const FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "WordPress",
  "Express.js",
];

const meta: Meta = {
  title: "Components/ComboBox",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    value: "",
    onValueChange: () => {},
    emptyMessage: "No Frameworks found",
    placeholder: "Find Frameworks",
    loading: false,
    disabled: false,
    className: "",
  },
  argTypes: {
    value: {
      control: "select",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Source_Code: Story = {
  render: (args) => (
    <ComboBox value="" onValueChange={() => {}}>
      <ComboBoxTrigger asChild>
        <Input
          className="bg-surface"
          placeholder={args.placeholder}
          startIcon={LuSearch}
          disabled={args.disabled}
        />
      </ComboBoxTrigger>
      <ComboBoxContent loading={args.loading} emptyMessage={args.emptyMessage}>
        <ScrollArea className="flex max-h-96 w-full flex-col overflow-y-auto">
          <ComboBoxGroup>
            {FRAMEWORKS.map((framework) => (
              <ComboBoxItem key={framework} value={framework}>
                {framework}
              </ComboBoxItem>
            ))}
          </ComboBoxGroup>
        </ScrollArea>
      </ComboBoxContent>
    </ComboBox>
  ),
  parameters: {
    docs: {
      source: {
        code: ComboBoxSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: () => <ComboBoxExample />,
  parameters: {
    docs: {
      source: {
        code: ComboBoxExampleSourceCode,
      },
    },
  },
};

export const With_Scroll_Area: Story = {
  render: () => <ComboBoxWithScrollArea />,
  parameters: {
    docs: {
      source: {
        code: ComboBoxWithScrollAreaSourceCode,
      },
    },
  },
};

export const With_Dialog: Story = {
  render: () => <ComboBoxWithDialog />,
  parameters: {
    docs: {
      source: {
        code: ComboBoxWithDialogSourceCode,
      },
    },
  },
};
