import React from 'react'
import Input from "../components/Input";
import Button from "../components/Button";

type Props = {}

const Registration = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
          Welcome again!
        </h1>
        <Input label="Email" type="text" className="mt-5"/>
        <Input label="Password" type="password" className="mt-5"/>
        <Input label="Repeat Password" type="password" className="mt-5"/>
        <Input label="Name" type="text" className="mt-5"/>
        <Input label="Surname" type="text" className="mt-5"/>
        <Button value="Register" className="bg-orange-600 text-white mt-10" />
      </div>
  )
}

export default Registration