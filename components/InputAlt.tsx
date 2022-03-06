import React from "react";

type Props = {
    type:string
    className?:string
};

const InputAlt = (props: Props) => {
  return (
    <input
      type={props.type}
      className={`${props.className} bg-gray-300 w-[50px] h-[50px] text-center text-xl rounded-lg font-bold`}
    />
  );
};

export default InputAlt;