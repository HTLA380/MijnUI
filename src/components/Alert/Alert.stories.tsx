import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertDescription, AlertIcon, AlertTitle } from "./Alert";
import AlertSourceCode from "./Alert.tsx?raw";

const meta: Meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["success", "info", "warning", "danger"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Alert {...args} className="w-full max-w-lg">
        <AlertIcon>
          <IoRocketOutline />
        </AlertIcon>
        <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
    );
  },

  parameters: {
    docs: {
      source: {
        code: AlertSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {
  render: (args) => {
    return (
      <Alert {...args} className="w-full max-w-lg">
        <AlertIcon>
          <IoRocketOutline />
        </AlertIcon>
        <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
        <AlertDescription className="text-xs sm:text-sm">
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Status: Story = {
  render: (args) => {
    return (
      <React.Fragment {...args}>
        {/* --------------------------------- Success --------------------------------  */}
        <Alert status="success" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Info --------------------------------  */}
        <Alert status="info" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Warning --------------------------------  */}
        <Alert status="warning" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Danger --------------------------------  */}
        <Alert status="danger" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </React.Fragment>
    );
  },
  decorators: [
    (Story) => (
      <div className="flex w-full flex-col items-center justify-center gap-3 py-10">
        <Story />
      </div>
    ),
  ],
};

export const Variant: Story = {
  render: (args) => {
    return (
      <React.Fragment {...args}>
        {/* --------------------------------- Success --------------------------------  */}
        <Alert variant="outline" status="success" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Info --------------------------------  */}
        <Alert variant="outline" status="info" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Warning --------------------------------  */}
        <Alert variant="outline" status="warning" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>

        {/* --------------------------------- Danger -------------------------------- */}
        <Alert variant="outline" status="danger" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </React.Fragment>
    );
  },
  decorators: [
    (Story) => (
      <div className="flex w-full flex-col items-center justify-center gap-3 py-10">
        <Story />
      </div>
    ),
  ],
};
