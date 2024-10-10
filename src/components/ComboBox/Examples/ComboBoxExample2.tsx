import { useState } from "react";
import { LuSearch } from "react-icons/lu";

import {
  ComboBox,
  ComboBoxContent,
  ComboBoxGroup,
  ComboBoxItem,
  ComboBoxTrigger,
} from "@/components/ComboBox";
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

const ComboBoxWithScrollArea = () => {
  const [value, setValue] = useState("AdonisJS");

  return (
    <ComboBox value={value} onValueChange={setValue}>
      <ComboBoxTrigger asChild>
        <Input
          className="bg-surface"
          placeholder={"Search for a framework"}
          startIcon={LuSearch}
        />
      </ComboBoxTrigger>
      <ComboBoxContent emptyMessage="No Frameworks Found" loading={false}>
        <ScrollArea className="flex max-h-96 flex-col overflow-y-auto">
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
  );
};

export default ComboBoxWithScrollArea;
