import { LogoCompany } from "./icons/Common";
import PaymentDetails from "./PaymentDetails";
import Checkbox from "./ui/Checkbox";
import { Button } from "./ui/Button";

const SidebarSection = () => {
  return (
    <div className="py-5 px-6 min-h-full w-full bg-white">
      <div className="border border-light-divide p-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-start">
            <LogoCompany />
            <div>
              <h3 className="text-foreground font-bold">Quickbook</h3>
              <p className="text-xs font-medium text-background">
                16 June, 2024
              </p>
              <p className="text-xs font-medium text-background">8:15 PM</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-background">Publishing...</p>
            <p className="text-xs font-medium text-background">Jimmy Jason</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 px-1 items-center">
          <Checkbox name="sync" label="Auto Sync" />
          <Checkbox name="config" label="Save Config" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 mb-3 text-center items-center">
        <p className="font-bold cursor-pointer text-sm rounded-lg border py-2.5 border-light-divide text-foreground">
          Comment
        </p>
        <p className="font-bold cursor-pointer text-sm rounded-lg border py-2.5 border-transparent text-background">
          Query
        </p>
      </div>
      <div className="flex flex-col pt-2.5 pb-5 mx-3.5 mb-5">
        <p className="font-bold text-base pb-2 text-background">Type Comment</p>
        <div className="border-b-2 w-full flex flex-col border-light-divide">
          <textarea
            className="w-full resize-none font-bold text-sm appearance-none placeholder:text-background !h-auto !min-h-[7.75rem]"
            placeholder="Start typing ...."
            rows={4}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Button className="w-full text-center hover:bg-light-gray/90 hover:text-border-shade bg-light-gray text-background">
          Add Comment
        </Button>
        <Button className="w-full">View Line Items</Button>
      </div>
      <PaymentDetails />
    </div>
  );
};
export default SidebarSection;
