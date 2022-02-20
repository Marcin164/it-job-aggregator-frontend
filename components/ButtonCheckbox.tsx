import React, { useState } from "react";

type Props = {
  label?: string;
  id: string;
  type: string;
  name?: string
  checked?:boolean
};

const ButtonCheckbox = (props: Props) => {

  const [style, setStyle] = useState("font-normal bg-gray-200 border-gray-200");

  return (
    <>
      <label
        className={`${style} border-2 rounded w-[100px] h-[50px] flex justify-center items-center`}
        htmlFor={props.id}
      ><span>
        {props.label}
        </span>
      </label>
      <input
        id={props.id}
        type={props.type}
        className="invisible"
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
