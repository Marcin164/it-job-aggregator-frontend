import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
          Welcome again!
        </h1>
        <Input label="Email" type="text" />
        <Input label="Password" type="password" />
        <Checkbox />
        <Button value="Forgot password?" className="text-orange-600" />
        <Button value="Log In" className="bg-orange-600 text-white" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
          Are you new?
        </h1>
        <Button value="Create account" className="bg-orange-600 text-white mt-8" />
      </div>
    </>
  );
};

export default Login;
