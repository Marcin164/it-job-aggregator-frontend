import React from "react";

type Props = {
    type:string
    className?:string
    value?:string
    onChange?:(e:any) => any
    onKeyDown?:(e:any) => any
};

const InputAlt = (props: Props) => {
  return (
    <input
      type={props.type}
      className={`${props.className} bg-gray-300 w-[50px] h-[50px] text-center text-xl rounded-lg font-bold`}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      min="0" 
      max="9"
    />
  );
};

export default InputAlt;