"use client";
import { TransitionChild, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import SidebarSection from "./SidebarSection";
import { InformationCircleIcon, XMarkIcon } from "./icons/Common";

const SidePopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="mt-0.5" onClick={() => setOpen(true)}>
        <InformationCircleIcon className="text-main-bg cursor-pointer h-5 w-5" />
      </button>
      <Transition show={open}>
        <TransitionChild>
          <div
            className="fixed inset-0 bg-black/30 z-50 transition duration-300 data-closed:opacity-0"
            onClick={() => setOpen(false)}
          />
        </TransitionChild>

        <TransitionChild>
          <div className="fixed inset-y-0 right-0 w-full max-w-md pt-6 bg-white z-50 overflow-y-auto transition duration-300 data-closed:translate-x-full">
            <XMarkIcon
              onClick={() => setOpen(false)}
              className="h-5 w-5 text-black fixed top-3 cursor-pointer right-9"
            />
            <SidebarSection />
          </div>
        </TransitionChild>
      </Transition>
    </>
  );
};

export default SidePopup;
