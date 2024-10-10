import { useState } from "react";
import { LuSearch } from "react-icons/lu";

import {
  ComboBox,
  ComboBoxContent,
  ComboBoxItem,
  ComboBoxTrigger,
} from "@/components/ComboBox";
import { Input } from "@/components/Input";

const FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "WordPress",
  "Express.js",
];

const ComboBoxExample = () => {
  const [value, setValue] = useState("SvelteKit");

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
        {FRAMEWORKS.map((framework) => (
          <ComboBoxItem key={framework} value={framework}>
            {framework}
          </ComboBoxItem>
        ))}
      </ComboBoxContent>
    </ComboBox>
  );
};

export default ComboBoxExample;
