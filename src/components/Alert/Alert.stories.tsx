import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { LuCheckCircle, LuFileWarning } from "react-icons/lu";
import { MdErrorOutline } from "react-icons/md";
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
    title: "New Feature Added",
    description: "A new feature has been added to the project.",
    icon: <IoRocketOutline />,
    status: "default",
    variant: "outline",
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
          variant={"outline"}
          title="Deployment Successful"
          description="Your application has been successfully deployed."
          icon={<LuCheckCircle />}
        />

        {/* --------------------------------- Info --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="default" // default  status
          variant={"outline"}
          title="New Feature Added"
          description="A new feature has been added to the project."
          icon={<IoRocketOutline />}
        />

        {/* --------------------------------- Warning --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="warning"
          variant={"outline"}
          title="High Memory Usage"
          description="The application is using a high amount of memory."
          icon={<LuFileWarning />}
        />

        {/* --------------------------------- Danger --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="danger"
          variant={"outline"}
          title="Build Failed"
          description="The latest build has failed. Please check the logs for details."
          icon={<MdErrorOutline />}
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
 * There are two variants available for the Alert component:
 * 1. <code><strong>filled</strong></code>
 * 2. <code><strong>outline</strong></code>
 */
export const Variant: Story = {
  render: (args) => {
    return (
      <React.Fragment {...args}>
        {/* --------------------------------- Success --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="success"
          variant={"filled"}
          title="Deployment Successful"
          description="Your application has been successfully deployed."
          icon={<LuCheckCircle />}
        />

        {/* --------------------------------- Info --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="default" // default  status
          variant={"filled"}
          title="New Feature Added"
          description="A new feature has been added to the project."
          icon={<IoRocketOutline />}
        />

        {/* --------------------------------- Warning --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="warning"
          variant={"filled"}
          title="High Memory Usage"
          description="The application is using a high amount of memory."
          icon={<LuFileWarning />}
        />

        {/* --------------------------------- Danger --------------------------------  */}
        <Alert
          className="w-full max-w-lg"
          status="danger"
          variant={"filled"}
          title="Build Failed"
          description="The latest build has failed. Please check the logs for details."
          icon={<MdErrorOutline />}
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
        title={<h5 className="font-bold text-blue-500">Customized Alert</h5>}
        description={
          <p className="text-sm text-blue-500">
            You can customize the title and description of the alert by passing
            a ReactNode as the value for the props.
          </p>
        }
        icon={<IoRocketOutline className="text-blue-500" />}
      />
    );
  },
};
