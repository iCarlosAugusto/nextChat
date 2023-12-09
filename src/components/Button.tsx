import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>
}

function ButtonComponent({label, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-blue-400 h-10">
      {label}
    </button>
  )
}

export { ButtonComponent }