"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { XMarkIcon, CopyIcon } from "./icons/Common";
import { Button } from "./ui/Button";
import FileUpload from "./ui/FileUpload";
import SelectInput from "./ui/SelectInput";
import Input from "./ui/Input";

const CommonDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Button onClick={open} className="ml-auto !font-medium">
        Add to Expenses Report
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-2xl rounded-xl pb-20 bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <header className="flex items-center flex-wrap justify-between mb-6">
                <h2 className="font-bold text-sm text-background">
                  All Documents
                </h2>
                <div className="flex items-center gap-3">
                  <nav
                    className="grid grid-cols-3 gap-2.5"
                    aria-label="Document Categories"
                  >
                    <button className="font-bold text-sm rounded-lg py-2.5 border border-transparent text-background">
                      All Documents
                    </button>
                    <button className="font-bold text-sm rounded-lg py-2.5 border border-light-divide text-main-bg">
                      Bills
                    </button>
                    <button className="font-bold text-sm rounded-lg py-2.5 border border-transparent text-background">
                      Receipts
                    </button>
                  </nav>
                  <XMarkIcon
                    className="h-6 w-6 cursor-pointer"
                    onClick={close}
                    aria-label="Close dialog"
                  />
                </div>
              </header>

              <section className="grid grid-cols-2 gap-x-3 items-end mb-6">
                <div className="border-b border-light-divide">
                  <Input
                    defaultValue="Accountant 01"
                    label="Document Owner"
                    placeholder="Start Typing"
                    id="owner"
                  />
                </div>
                <div className="border-b border-light-divide">
                  <SelectInput
                    label="Client"
                    id="client"
                    placeholder="Select Client"
                  />
                </div>
              </section>

              <section className="flex flex-col pb-6 items-center justify-center">
                <FileUpload />
                <Button className="w-full max-w-48 mt-4">Add Receipt</Button>
              </section>

              <section className="flex flex-col gap-2">
                <h3 className="font-normal text-sm text-background">
                  Send Over Email
                </h3>

                <div className="flex items-center gap-2 font-bold text-sm">
                  <p className="text-foreground">Single:</p>
                  <p className="text-main-bg">abc.single@gmail.com</p>
                  <button aria-label="Copy single email">
                    <CopyIcon />
                  </button>
                </div>

                <div className="flex items-center gap-2 font-bold text-sm">
                  <p className="text-foreground">Multiple:</p>
                  <p className="text-main-bg">abc.multiple@gmail.com</p>
                  <button aria-label="Copy multiple email">
                    <CopyIcon />
                  </button>
                </div>
              </section>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CommonDialog;
