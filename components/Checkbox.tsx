import React from "react";

type Props = {};

const Checkbox = (props: Props) => {
  return (
    <div className="my-2 mt-5">
      <input type="checkbox" /> 
      <label className="ml-2">Remember me</label>
    </div>
  );
};

export default Checkbox;