import { InputProps } from "~/app/utils/type";
import { FC } from "react";
const Input: FC<InputProps> = ({ label, id, placeholder, defaultValue }) => {
  return (
    <div className="flex flex-col gap-1.5 pt-4 pb-3">
      <label className="font-normal text-sm text-background" htmlFor={id}>
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        type="text"
        className="font-bold placeholder:text-background text-sm"
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};
export default Input;
