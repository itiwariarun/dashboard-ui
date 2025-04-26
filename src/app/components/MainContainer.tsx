import Image from "next/image";
import CommonDialog from "./Dialog";
import BillsCard from "./ui/BillCard";
const MainContainer = () => {
  return (
    <div className="px-5 my-9 w-full">
      <div className="rounded-xl px-8 py-6 w-full bg-white">
        <CommonDialog />
        <div className="grid xl:flex gap-6 pt-6">
          <div className="xl:max-w-[37%] w-full flex flex-col gap-6">
            <div className="grid grid-cols-3 text-center items-center gap-2.5">
              <button className="font-bold cursor-pointer text-sm rounded-lg border py-2.5 border-transparent text-background">
                All Document
              </button>
              <button className="font-bold cursor-pointer text-sm rounded-lg border py-2.5 border-light-divide text-foreground">
                Bills
              </button>
              <button className="font-bold cursor-pointer text-sm rounded-lg border py-2.5 border-transparent text-background">
                Receipts
              </button>
            </div>
            <div className="border border-light-slate rounded-xl divide-y divide-light-slate">
              <BillsCard />
            </div>
          </div>
          <div className="xl:max-w-[63%] border border-dashed rounded-[1.25rem] border-light-divide w-full xl:aspect-auto aspect-square min-h-full relative">
            <Image
              src="/assets/invoice.webp"
              className="object-fill px-2.5 py-3 rounded-[1.25rem]"
              alt="invoice"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
