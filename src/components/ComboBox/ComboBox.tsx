import * as React from "react";
import { LuCheck } from "react-icons/lu";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Popover } from "@radix-ui/react-popover";
import { Command as CommandPrimitive } from "cmdk";

import { CommandEmpty, CommandItem } from "@/components/Command";
import { PopoverContent } from "@/components/Popover";
import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils";
import { mergeRefs } from "@/utils/merge-refs";

type ComboBoxContextProps = {
  onValueChange: (value: string) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;

  handleSelectOption: (value: string) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  handleBlur: () => void;

  setShouldFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const ComboBoxContext = React.createContext<ComboBoxContextProps | null>(null);

const useComboBox = () => {
  const context = React.useContext(ComboBoxContext);
  if (!context) {
    throw new Error("useComboBox must be used within ComboBoxProvider");
  }
  return context;
};

/* -------------------------------------------------------------------------- */
/*                                  ComboBox                                  */
/* -------------------------------------------------------------------------- */

type ComboBoxProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive> & {
  value: string;
  onValueChange: (value: string) => void;
};

const ComboBox = ({
  value,
  onValueChange,
  children,
  ...props
}: ComboBoxProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [isOpen, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<string>(value || "");
  const [inputValue, setInputValue] = React.useState<string>("");
  const [shouldFilter, setShouldFilter] = React.useState(false);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true);
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [isOpen, onValueChange],
  );

  const handleBlur = React.useCallback(() => {
    setOpen(false);
    setInputValue(selectedValue);
    setShouldFilter(false);
  }, [selectedValue]);

  const handleSelectOption = React.useCallback(
    (value: string) => {
      setInputValue(value);
      setSelectedValue(value);
      onValueChange?.(value);

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [onValueChange],
  );

  return (
    <ComboBoxContext.Provider
      value={{
        isOpen,
        setOpen,

        onValueChange,

        inputValue,
        setInputValue,
        inputRef,

        handleBlur,
        handleKeyDown,
        handleSelectOption,
        selectedValue,
        setSelectedValue,
        setShouldFilter,
      }}
    >
      <Popover open={isOpen} onOpenChange={setOpen}>
        <CommandPrimitive
          shouldFilter={shouldFilter}
          onKeyDown={handleKeyDown}
          {...props}
        >
          {children}
        </CommandPrimitive>
      </Popover>
    </ComboBoxContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */
/*                               ComboBoxTrigger                              */
/* -------------------------------------------------------------------------- */

const ComboBoxTrigger = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ ...props }, ref) => {
  const {
    inputValue,
    inputRef,
    setInputValue,
    setOpen,
    handleBlur,
    setShouldFilter,
  } = useComboBox();

  return (
    <PopoverPrimitive.Anchor asChild>
      <CommandPrimitive.Input
        ref={mergeRefs([inputRef, ref])}
        value={inputValue}
        onValueChange={(value) => {
          setInputValue(value);
          setShouldFilter(true);
        }}
        onBlur={handleBlur}
        onFocus={() => setOpen(true)}
        {...props}
      />
    </PopoverPrimitive.Anchor>
  );
});

ComboBoxTrigger.displayName = "ComboBoxTrigger";

/* -------------------------------------------------------------------------- */
/*                               ComboBoxContent                              */
/* -------------------------------------------------------------------------- */

type ComboBoxContentProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
> & {
  emptyMessage?: string;
  loading?: boolean;
};

const ComboBoxContent = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  ComboBoxContentProps
>(({ loading, emptyMessage, children, ...props }, ref) => {
  return (
    <PopoverContent
      asChild
      onOpenAutoFocus={(e) => e.preventDefault()}
      onInteractOutside={(e) => {
        if (
          e.target instanceof Element &&
          e.target.hasAttribute("cmdk-input")
        ) {
          e.preventDefault();
        }
      }}
      className={"w-[--radix-popover-trigger-width] overflow-y-auto p-1"}
      // you can set this to true if you want to flip the content to flip when there isn't enough space for the comboBox content
      avoidCollisions={false}
      // to prevent scrolling issue when Popover inside Dialog
      // see: https://github.com/radix-ui/primitives/issues/1159
      onWheel={(e) => {
        e.stopPropagation();
      }}
    >
      <CommandPrimitive.List ref={ref} {...props}>
        {!loading && children}
        {!loading && (
          <CommandEmpty>{emptyMessage || "No Options Found"}</CommandEmpty>
        )}
        {loading && (
          <CommandPrimitive.Loading>
            <Skeleton className="h-7 w-full" />
          </CommandPrimitive.Loading>
        )}
      </CommandPrimitive.List>
    </PopoverContent>
  );
});

ComboBoxContent.displayName = "ComboBoxContent";

const ComboBoxGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ children, ...props }, ref) => {
  return (
    <CommandPrimitive.Group ref={ref} {...props}>
      {children}
    </CommandPrimitive.Group>
  );
});

ComboBoxGroup.displayName = "ComboBoxGroup";

/* -------------------------------------------------------------------------- */
/*                                ComboBoxItem                                */
/* -------------------------------------------------------------------------- */

const ComboBoxItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ children, value }, ref) => {
  const { selectedValue, handleSelectOption } = useComboBox();

  const isSelected = selectedValue === value;

  return (
    <CommandItem
      ref={ref}
      key={value}
      value={value}
      onMouseDown={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onSelect={handleSelectOption}
      className={cn(
        "flex w-full items-center justify-between gap-2 rounded-md",
      )}
    >
      {children}
      {isSelected ? <LuCheck className="w-4" /> : null}
    </CommandItem>
  );
});

ComboBoxItem.displayName = "ComboBoxItem";

export {
  ComboBox,
  ComboBoxContent,
  ComboBoxGroup,
  ComboBoxItem,
  ComboBoxTrigger,
};
