import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";
import AlertSourceCode from "./Alert.tsx?raw";

const meta: Meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    className: "w-full max-w-lg",
    title: "Heads Up!",
    description: "You can add components to your app using the CLI.",
    icon: <IoRocketOutline />,
    status: "default",
    variant: "filled",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["success", "default", "warning", "danger"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline"],
    },

    icon: {
      control: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: AlertSourceCode,
      },
    },
  },
};

export const Example_Usage: Story = {};

export const Status: Story = {
  render: (args) => {
    return (
      <React.Fragment {...args}>
        {/* --------------------------------- Success --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="success"
          title="Head Up!"
          description="You can add components to your app using the CLI."
          icon={<IoRocketOutline />}
        />

        {/* --------------------------------- Info --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="default" // default  status
          title="Head Up!"
          description="You can add components to your app using the CLI."
          icon={<IoRocketOutline />}
        />

        {/* --------------------------------- Warning --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="warning"
          title="Head Up!"
          description="You can add components to your app using the CLI."
          icon={<IoRocketOutline />}
        />

        {/* --------------------------------- Danger --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="danger"
          title="Head Up!"
          description="You can add components to your app using the CLI."
          icon={<IoRocketOutline />}
        />
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
        <Alert
          className="w-full max-w-lg"
          status="success"
          variant={"outline"}
          title="Head Up!"
          description="You can add components to your app using the CLI."
          icon={<IoRocketOutline />}
        />

        {/* --------------------------------- Info --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="default" // default status
          variant={"outline"}
          title="Head Up!"
          description="You can add components to your app using the CLI."
          icon={<IoRocketOutline />}
        />

        {/* --------------------------------- Warning --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="warning"
          variant={"outline"}
          title="Head Up!"
          description="You can add components to your app using the CLI."
          icon={<IoRocketOutline />}
        />

        {/* --------------------------------- Danger --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="danger"
          variant={"outline"}
          title="Head Up!"
          description="You can add components to your app using the CLI."
          icon={<IoRocketOutline />}
        />
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

/**
 * You can also pass a ReactNode as the value for the <code><strong>title</strong></code> and <code><strong>description</strong></code> props.
 * If you pass a ReactNode, the component will use your custom component without any additional wrappers.
 * However, if you pass a string, the component will render the string using the built-in components provided by the Alert component.
 */

export const Customization: Story = {
  render: (args) => {
    return (
      <Alert
        {...args}
        className="w-full max-w-lg border-blue-500"
        status="default"
        title={<h5 className="font-bold text-blue-500">Head Up!</h5>}
        description={
          <p className="text-sm text-blue-500">
            You can add components to your app using the CLI
          </p>
        }
        icon={<IoRocketOutline className="text-blue-500" />}
      />
    );
  },
};
