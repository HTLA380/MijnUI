import { LuPlus } from "react-icons/lu";
import type { Meta, StoryObj } from "@storybook/react";

import ButtonSourceCode from "./Button.tsx?raw";
import { Button } from "./";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        code: ButtonSourceCode,
      },
    },
  },
  args: {
    children: "Button",
    disabled: false,
    unstyled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      type: "string",
      control: "select",
      options: ["primary", "secondary", "outline", "danger", "ghost"],
    },
    size: {
      type: "string",
      control: "select",
      options: ["lg", "md", "sm"],
    },
    radius: {
      type: "string",
      control: "select",
      options: ["full", "lg", "md", "sm"],
    },
    ref: { table: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const IconButton: Story = {
  args: {
    size: "icon",
    children: <LuPlus size={20} />,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <>
      <Button size={"sm"}>{args.children}</Button>
      <Button size={"md"}>{args.children}</Button>
      <Button size={"lg"}>{args.children}</Button>
    </>
  ),

  decorators: [
    (Story) => (
      <div className="space-x-2">
        <Story />
      </div>
    ),
  ],
};
