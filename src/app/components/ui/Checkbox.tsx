import { CheckboxProps } from "~/app/utils/type";
import { FC } from "react";

const Checkbox: FC<CheckboxProps> = ({ label, name }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer px-px">
      <input
        name={name}
        id={name}
        defaultChecked={true}
        type="checkbox"
        className="group size-4 m-px rounded-md bg-main-bg p-1 ring-1 ring-main-bg accent-main-bg ring-inset focus:not-data-focus:outline-none data-checked:bg-white data-focus:outline data-focus:outline-offset-2 data-focus:outline-white"
      />
      <label className="font-medium text-foreground text-base" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
