import { Meta, StoryObj } from "@storybook/react";

import AlertDialogExample from "./Examples/AlertDialogExample";
import AlertDialogExampleSource from "./Examples/AlertDialogExample.tsx?raw";
import { AlertDialog } from "./AlertDialog";
import AlertDialogSourceCode from "./AlertDialog.tsx?raw";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AlertDialogExample />,
  parameters: {
    docs: {
      source: {
        code: AlertDialogSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: () => <AlertDialogExample />,
  parameters: {
    docs: {
      source: {
        code: AlertDialogExampleSource,
      },
    },
  },
};
