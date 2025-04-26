import { FC } from "react";
import { SelectInputProps } from "~/app/utils/type";

const SelectInput: FC<SelectInputProps> = ({ label, id, placeholder }) => {
  return (
    <div className="flex flex-col cursor-pointer gap-1.5 pt-4 pb-3">
      <label className="font-normal text-sm text-background" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <select
          defaultValue=" "
          className="font-bold w-full disabled:text-background pl-0 -ml-1 text-background text-sm"
        >
          <option value=" " disabled className="text-background">
            {placeholder}
          </option>{" "}
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>
    </div>
  );
};
export default SelectInput;
