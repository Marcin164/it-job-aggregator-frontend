import React from "react";
import Button from "../components/Button";
import InputAlt from "../components/InputAlt";

type Props = {};

const Verification = (props: Props) => {
  return (
    <div>
      <h2 className="text-2xl text-orange-600 p-2 align-center text-center font-bold">
        We send you an activation code to your email
      </h2>
      <div className="flex justify-around mt-6">
        <InputAlt type="number"/>
        <InputAlt type="number"/>
        <InputAlt type="number"/>
        <InputAlt type="number"/>
        <InputAlt type="number"/>
        <InputAlt type="number"/>
      </div>
      <div className="flex justify-center">
        <Button
          value="Resend Code"
          className="bg-orange-600 text-white mt-10"
        />
      </div>
    </div>
  );
};

export default Verification;
