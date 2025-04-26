import {
  Logo,
  Home,
  Assign,
  Bank,
  Reports,
  Contacts,
  Invoice,
  Query,
  Help,
} from "./icons/Common";
const navItems = [
  { label: "Dashboard", href: "/home", component: <Home /> },
  { label: "Accounting", href: "/assign", component: <Assign /> },
  { label: "Banking", href: "/bank", component: <Bank /> },
  { label: "Reports", href: "/reports", component: <Reports /> },
  { label: "Contacts", href: "/contacts", component: <Contacts /> },
  { label: "Invoicing", href: "/invoice", component: <Invoice /> },
  { label: "Queries", href: "/query", component: <Query /> },
];
const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 overflow-y-auto overflow-x-hidden flex flex-col justify-between items-center py-1 min-w-[5.25rem] bg-main-bg">
      <div className="h-fit w-full flex mx-auto flex-col items-center">
        <div className="pb-1.5 cursor-pointer mx-auto">
          <Logo />
        </div>
        {navItems.map(({ label, href, component }) => (
          <button className="relative h-fit cursor-pointer w-full" key={href}>
            {href === "/assign" && (
              <div className="absolute left-0 z-40 top-0 bottom-0 border-l-4 border-l-white" />
            )}
            <div
              className={`flex flex-col relative items-center p-3 gap-1 text-main-font font-medium text-sm ${
                href === "/assign" ? "bg-background/60" : ""
              }`}
            >
              {component}
              <p>{label}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-auto">
        <button className="flex cursor-pointer flex-col items-center p-3 gap-1 text-main-font font-medium text-sm">
          <Help />
          <p>Help</p>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
