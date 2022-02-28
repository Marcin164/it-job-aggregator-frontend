import React from "react";

type Props = {
  className?: string;
  children?: any;
  title?:string
};

const PreferencesCard = (props: Props) => {
  return (
    <>
      <h2 className="text-2xl text-orange-600 p-2 align-center text-center font-bold">
        {props.title}
      </h2>
      <div
        className={`${props.className}`}
      >
        {props.children}
      </div>
    </>
  );
};

export default PreferencesCard;
