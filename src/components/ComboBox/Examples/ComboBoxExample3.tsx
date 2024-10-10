import * as React from "react";
import { LuChevronsUpDown } from "react-icons/lu";

import {
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/AlertDialog/AlertDialog";
import { Button } from "@/components/Button";
import {
  ComboBox,
  ComboBoxContent,
  ComboBoxGroup,
  ComboBoxItem,
  ComboBoxTrigger,
} from "@/components/ComboBox/ComboBox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
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
  "Nest.js",
  "Angular",
  "Vue.js",
  "Ember.js",
  "Backbone.js",
  "Meteor.js",
  "Django",
  "Flask",
  "Laravel",
  "Spring Boot",
  "Ruby on Rails",
  "Phoenix",
  "Gatsby.js",
  "Strapi",
  "Fastify",
  "Hapi.js",
  "AdonisJS",
];

const ComboBoxWithDialog = () => {
  const [value, setValue] = React.useState("Next.js");

  return (
    <Dialog>
      <DialogTrigger>Add User</DialogTrigger>
      <DialogContent>
        <AlertDialogHeader>
          <DialogTitle>User Information</DialogTitle>
        </AlertDialogHeader>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <ComboBox value={value} onValueChange={setValue}>
          <ComboBoxTrigger asChild>
            <Input
              className="bg-surface"
              placeholder={"Search for a framework"}
              endIcon={LuChevronsUpDown}
            />
          </ComboBoxTrigger>
          <ComboBoxContent emptyMessage="No Frameworks Found" loading={false}>
            <ScrollArea className="flex max-h-60 flex-col overflow-y-auto">
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
        <AlertDialogFooter>
          <DialogClose>Cancel</DialogClose>
          <DialogClose unstyled asChild>
            <Button>Add User</Button>
          </DialogClose>
        </AlertDialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ComboBoxWithDialog;
