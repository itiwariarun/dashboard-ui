"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { type } from "~/app/utils/constants";
import { ChevronDownIcon, CheckIcon } from "./../icons/Common";

const Select = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<{ id: number; name: string }>(
    type[1]
  );
  const filteredType =
    query === ""
      ? type
      : type.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox
      value={selected}
      onChange={(value) => setSelected(value as { id: number; name: string })}
      onClose={() => setQuery("")}
    >
      <div className="relative cursor-pointer max-h-10 max-w-48">
        <ComboboxInput
          className={clsx(
            "w-full rounded-lg border border-border-shade py-2 pr-10 pl-4 text-foreground text-base font-normal",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25"
          )}
          displayValue={(item: { name: string }) => item?.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <ChevronDownIcon className="size-8 stroke-black/60 group-data-hover:stroke-black" />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-(--input-width) rounded-xl border border-black/60 bg-white/60 p-1 [--anchor-gap:--spacing(1)] empty:invisible",
          "transition duration-100 ease-in data-leave:data-closed:opacity-0"
        )}
      >
        {filteredType.map((item) => (
          <ComboboxOption
            key={item.id}
            value={item}
            className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-black/10"
          >
            <CheckIcon className="invisible size-4 stroke-black group-data-selected:visible" />
            <div className="text-foreground text-base font-normal">
              {item.name}
            </div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};
export default Select;
