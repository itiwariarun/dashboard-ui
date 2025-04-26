"use client";

import Description from "./Description";
import { useState } from "react";
import Input from "./ui/Input";
import SelectInput from "./ui/SelectInput";
import Radio from "./ui/Radio";
import { ChevronRightIcon } from "./icons/Common";

const PaymentDetails = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="my-6 flex items-center px-3 py-4 border-b border-light-divide justify-between">
        <button className="rounded-sm cursor-pointer bg-light-shade p-1">
          {" "}
          <ChevronRightIcon className="size-5 rotate-180 stroke-black/60 group-data-hover:stroke-black" />
        </button>
        <p className="font-bold text-center text-base">Payment Details</p>
        <button className="rounded-sm cursor-pointer bg-light-shade p-1">
          <ChevronRightIcon className="size-5 stroke-black/60 group-data-hover:stroke-black" />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <p className="font-medium text-base text-foreground">Payment Details</p>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-sm bg-main-bg/10 cursor-pointer p-px"
        >
          <ChevronRightIcon className="size-8 -rotate-90 stroke-main-bg group-data-hover:stroke-main-bg" />
        </button>
      </div>
      {open ? (
        <div className="flex flex-col divide-y divide-light-divide border-b border-light-divide">
          <div className="flex pb-4 gap-4 mt-6 text-center items-center">
            <div className="w-28">
              <Radio name="paid" id="paid" defaultChecked={true} label="Paid" />
            </div>{" "}
            <div className="w-28">
              <Radio name="paid" id="unpaid" label="Unpaid" />
            </div>
          </div>
          <Input
            label="Bill Number"
            placeholder="Start Typing"
            id="bill_number"
          />
          <Input label="Bill Date" placeholder="Start Typing" id="bill_date" />
          <Input label="Paid Amount" placeholder="£ 1900.00" id="paid_amount" />
          <Input label="Paid Date" placeholder="Start Typing" id="paid_date" />
          <Input label="Due Date" placeholder="Start Typing" id="due_date" />
          <SelectInput
            label="Payment Mode"
            id="payment_mode"
            placeholder="Select Payment Mode"
          />
          <SelectInput
            label="Currency"
            id="currency"
            placeholder="Select Currency"
          />
          <Input
            label="Bank Transaction Ref"
            placeholder="Start Typing"
            id="bank_ref"
          />{" "}
          <Input label="Total Amount" placeholder="Start Typing" id="total" />{" "}
          <Input label="Tax Amount" placeholder="Start Typing" id="tax" />{" "}
          <Input
            label="Total Amount (GBP)"
            placeholder="Start Typing"
            id="total_gbp"
          />{" "}
          <Input
            label="Tax Amount (GBP)"
            placeholder="Start Typing"
            id="tax_gbp"
          />{" "}
          <Input label="FX Rate" placeholder="Start Typing" id="fax_rate" />
        </div>
      ) : (
        <></>
      )}
      <Description />
    </div>
  );
};
export default PaymentDetails;
