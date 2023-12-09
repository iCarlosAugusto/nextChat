import { ChangeEventHandler } from "react";

interface InputComponentProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function InputComponent({value, onChange}: InputComponentProps) {
  return(
    <input className="m-2 p-2 flex-1 text-black" value={value} onChange={onChange} type="text"/>
  )
}

export { InputComponent }