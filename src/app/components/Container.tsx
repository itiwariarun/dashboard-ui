"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import MainContainer from "./MainContainer";
import SidebarSection from "./SidebarSection";
import { Transition } from "@headlessui/react";
import { TransitionChild } from "@headlessui/react";
import { ChevronDoubleRightIcon } from "./icons/Common";

const Container = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full max-md:overflow-x-hidden mx-auto">
      <div onMouseLeave={() => setOpen(false)} className="md:hidden">
        <button
          className="fixed z-30 top-7 -left-2 shadow-2xl p-1 rounded-full"
          onClick={() => setOpen(true)}
          aria-label="Open Sidebar"
        >
          <ChevronDoubleRightIcon className="text-main-bg cursor-pointer h-4 w-4" />
        </button>
        <Transition show={open}>
          <TransitionChild>
            <div className="inset-y-0 w-fit bg-white z-50 overflow-y-auto transition duration-300 data-closed:-translate-x-full">
              <Sidebar />
            </div>
          </TransitionChild>
        </Transition>
      </div>

      <aside className="hidden md:flex">
        <Sidebar />
      </aside>

      <div className="md:max-w-[calc(100dvw-5.25rem)] flex w-full">
        <main className="flex w-full lg:w-[65%] 2xl:w-[75%] flex-col">
          <header className="w-full">
            <TopNav />
          </header>
          <section className="w-full sticky top-0">
            <MainContainer />
          </section>
        </main>

        {/* Right Sidebar Section */}
        <aside className="w-[35%] 2xl:w-[25%] hidden lg:flex">
          <SidebarSection />
        </aside>
      </div>
    </div>
  );
};

export default Container;
