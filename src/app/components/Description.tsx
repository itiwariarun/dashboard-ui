import { useState } from "react";
import { ChevronRightIcon } from "./icons/Common";
import Radio from "./ui/Radio";
import { Button } from "./ui/Button";

const Description = () => {
  const [open, setOpen] = useState(true);

  return (
    <section>
      <header
        className={`flex items-center justify-between pt-6 ${
          !open ? "pb-6" : ""
        }`}
      >
        <h2 className="font-medium text-base text-foreground">Description</h2>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-sm bg-main-bg/10 cursor-pointer p-px"
          aria-label={open ? "Collapse description" : "Expand description"}
        >
          <ChevronRightIcon className="size-8 -rotate-90 stroke-main-bg group-data-hover:stroke-main-bg" />
        </button>
      </header>

      {open && (
        <>
          <section className="flex flex-col divide-y divide-light-divide border-b border-light-divide">
            <fieldset className="mt-6 pb-3">
              <legend className="font-bold text-sm pb-2 text-background">
                Line Item
              </legend>

              <div className="flex gap-4 text-center items-center">
                <div className="w-28">
                  <Radio
                    name="list"
                    id="single"
                    defaultChecked={true}
                    label="Single"
                  />
                </div>
                <div className="w-28">
                  <Radio name="list" id="multiple" label="Multiple" />
                </div>
              </div>
            </fieldset>

            <section className="flex flex-col pt-5 pb-3">
              <label
                htmlFor="description-textarea"
                className="font-normal text-sm pb-2 text-background"
              >
                Description
              </label>
              <div className="w-full flex flex-col">
                <textarea
                  id="description-textarea"
                  className="w-full resize-none font-bold text-sm appearance-none placeholder:text-background !h-auto !min-h-[7.75rem]"
                  placeholder="Enter Description"
                  rows={3}
                />
              </div>
            </section>
          </section>

          <nav
            aria-label="Description navigation controls"
            className="my-6 flex items-center px-3 py-4 border-b border-light-divide justify-between"
          >
            <button
              className="rounded-sm bg-light-shade p-1"
              aria-label="Previous"
            >
              <ChevronRightIcon className="size-5 rotate-180 stroke-black/60 group-data-hover:stroke-black" />
            </button>
            <div className="flex items-center gap-1">
              <div className="size-2 rounded-full bg-main-bg" />
              <div className="size-2 rounded-full bg-light-blue" />
            </div>
            <button className="rounded-sm bg-light-shade p-1" aria-label="Next">
              <ChevronRightIcon className="size-5 stroke-black/60 group-data-hover:stroke-black" />
            </button>
          </nav>
        </>
      )}

      <section className="flex flex-col gap-4">
        <Button className="w-full bg-main-bg/10 hover:bg-main-bg/30 hover:text-border-shade text-main-bg">
          Save
        </Button>
        <Button className="w-full">
          Publish
          <span className="p-px ml-2 bg-white/20">
            <ChevronRightIcon className="size-4 rotate-90 stroke-white group-data-hover:stroke-white" />
          </span>
        </Button>
      </section>
    </section>
  );
};

export default Description;
