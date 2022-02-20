import React, { useEffect, useState } from "react";

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
        className={`${style} px-8 py-3 border-2 rounded`}
        htmlFor={props.id}
      >
        {props.label}
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
