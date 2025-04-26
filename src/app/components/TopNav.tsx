import SidePopup from "./SidePopup";
import { Search } from "./icons/Common";
import { ChevronDownIcon, Alert, Settings, User } from "./icons/Common";
import { Button } from "./ui/Button";
import Select from "./ui/Select";
import Badge from "./ui/Badge";
const TopNav = () => {
  return (
    <div className="py-5 px-6 bg-white gap-4 flex flex-wrap overflow-x-hidden items-center justify-between w-full">
      <div className="flex w-fit items-center gap-2">
        <p className="text-foreground font-bold text-base">Review</p>
        <Select />
        <Badge />
        <div className="lg:hidden">
          <SidePopup />
        </div>
      </div>
      <div className="flex items-center gap-1 flex-wrap">
        <Button variant="secondary">
          <Search />
        </Button>
        <Button variant="secondary">Export to Excel</Button>
        <Button variant="secondary">Add Dcoument</Button>
        <Button variant="secondary">
          <span className="flex items-center gap-1.5">
            Connect{" "}
            <ChevronDownIcon className="size-5 stroke-main-bg group-data-hover:stroke-main-bg" />
          </span>
        </Button>
        <Button variant="secondary">
          <Alert />
        </Button>
        <Button variant="secondary">
          <Settings />
        </Button>
        <Button variant="secondary">
          <User />
        </Button>
      </div>
    </div>
  );
};
export default TopNav;
