import { LuMinus, LuPlus } from "react-icons/lu";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion/Accordion";

const CustomIcon = () => {
  return (
    <Accordion className="w-full max-w-80" type="single" collapsible>
      <AccordionItem
        className="w-full"
        trigger={
          <AccordionTrigger
            icon={
              <>
                <LuPlus className="duration-400 h-4 w-4 shrink-0 transition-transform group-data-[state=open]:hidden" />
                <LuMinus className="duration-400 h-4 w-4 shrink-0 transition-transform group-data-[state=closed]:hidden" />
              </>
            }
          >
            Is it accessible
          </AccordionTrigger>
        }
        content="Yes. It adheres to the WAI-ARIA design pattern."
        value="item-1"
      />
    </Accordion>
  );
};

export default CustomIcon;
