import React from "react";
import { RxCross2, RxMixerHorizontal } from "react-icons/rx";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Button";
import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/Popover/Popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[530px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} radius={"full"} variant={"surface"}>
          <RxMixerHorizontal size={18} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="relative w-72">
        <div className="flex flex-col justify-center gap-2.5">
          <p className="text-base font-medium">Dimensions</p>

          <fieldset className="flex items-center gap-2">
            <label
              className="inline-block w-20 min-w-fit shrink-0 text-nowrap text-sm font-medium text-main-text"
              htmlFor="width"
            >
              Width
            </label>
            <input
              className="w-full rounded-md border border-main-border bg-transparent px-2 py-1.5 text-sm outline-none focus:border-input-border focus:ring-1 focus:ring-input-border"
              id="width"
              defaultValue="100%"
            />
          </fieldset>
          <fieldset className="flex items-center gap-2">
            <label
              className="inline-block w-20 min-w-fit shrink-0 text-nowrap text-sm font-medium text-main-text"
              htmlFor="maxWidth"
            >
              Max. width
            </label>
            <input
              className="w-full rounded-md border border-main-border bg-transparent px-2 py-1.5 text-sm outline-none focus:border-input-border focus:ring-1 focus:ring-input-border"
              id="maxWidth"
              defaultValue="300px"
            />
          </fieldset>
          <fieldset className="flex items-center gap-2">
            <label
              className="inline-block w-20 min-w-fit shrink-0 text-nowrap text-sm font-medium text-main-text"
              htmlFor="height"
            >
              Height
            </label>
            <input
              className="w-full rounded-md border border-main-border bg-transparent px-2 py-1.5 text-sm outline-none focus:border-input-border focus:ring-1 focus:ring-input-border"
              id="height"
              defaultValue="25px"
            />
          </fieldset>
          <fieldset className="flex items-center gap-2">
            <label
              className="inline-block w-20 min-w-fit shrink-0 text-nowrap text-sm font-medium text-main-text"
              htmlFor="maxHeight"
            >
              Max. height
            </label>
            <input
              className="w-full rounded-md border border-main-border bg-transparent px-2 py-1.5 text-sm outline-none focus:border-input-border focus:ring-1 focus:ring-input-border"
              id="maxHeight"
              defaultValue="none"
            />
          </fieldset>
        </div>
        <PopoverClose asChild>
          <Button
            variant={"ghost"}
            size={"icon"}
            radius={"full"}
            className="absolute right-0 top-0 hover:bg-transparent"
          >
            <RxCross2 />
          </Button>
        </PopoverClose>
        <PopoverArrow className="fill-muted-text" />
      </PopoverContent>
    </Popover>
  ),
};

export const Example_Usage: Story = {};
