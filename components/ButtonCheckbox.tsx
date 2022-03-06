import React, { useState } from "react";

type Props = {
  label?: string;
  id: string;
  type: string;
  name?: string
  checked?:boolean
  className?:string
};

const ButtonCheckbox = (props: Props) => {

  const [style, setStyle] = useState("font-normal bg-gray-200 border-gray-200");

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
        onChange={(e: any) => {
          e.currentTarget.checked
            ? setStyle("font-bold bg-orange-600/50 border-orange-600")
            : setStyle("font-normal bg-gray-200 border-gray-200");
        }}
      />
    </>
  );
};

export default ButtonCheckbox;
