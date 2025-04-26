import { FC } from "react";
import { RadioProps } from "~/app/utils/type";

const Radio: FC<RadioProps> = ({ label, name, id, value, defaultChecked }) => {
  return (
    <div className="flex items-center cursor-pointer gap-2 px-px">
      <input
        name={name}
        value={value}
        id={id}
        defaultChecked={defaultChecked}
        type="radio"
        className="group size-4 m-px rounded-md bg-main-bg p-1 accent-main-bg ring-inset focus:not-data-focus:outline-none data-checked:bg-white data-focus:outline data-focus:outline-offset-2 data-focus:outline-white"
      />
      <label className="font-medium text-foreground text-base" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
export default Radio;
