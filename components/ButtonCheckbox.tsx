import React, { useState } from "react";

type Props = {
  label?: string;
  id: string;
  type: string;
  name?: string
  checked?:boolean
  className?:string
  onClick?:(e?:any) => any 
  onChange?:(e?:any) => any
};

const ButtonCheckbox = (props: Props) => {
  const [style, setStyle] = useState("font-normal bg-gray-200 border-gray-200");

  const changeStyle = (e:any) => {
    e.currentTarget.checked ? setStyle("font-bold bg-orange-600/50 border-orange-600") : setStyle("font-normal bg-gray-200 border-gray-200");
  }

  return (
    <>
      <label
        className={`${style} border-2 rounded-lg w-[100px] h-[50px] flex justify-center items-center box-border px-2`}
        htmlFor={props.id}
      ><span className="truncate">
        {props.label}
        </span>
      </label>
      <input
        id={props.id}
        type={props.type}
        className="hidden"
        name={props.name}
        value={props.label}
        onChange={changeStyle}
        onClick={props.onClick}
        checked={props.checked}
      />
    </>
  );
};

export default ButtonCheckbox;
