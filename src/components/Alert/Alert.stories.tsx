import { IoRocketOutline } from "react-icons/io5";
import { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertDescription, AlertIcon, AlertTitle } from "./Alert";

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
};

export const Status: Story = {
  render: (args) => {
    return (
      <>
        <Alert status="success" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert status="info" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert status="warning" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert status="danger" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </>
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
      <>
        <Alert variant="outline" status="success" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert variant="outline" status="info" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert variant="outline" status="warning" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
        <Alert variant="outline" status="danger" className="w-full max-w-lg">
          <AlertIcon>
            <IoRocketOutline />
          </AlertIcon>
          <AlertTitle className="text-sm sm:text-base">Heads Up!</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </>
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
