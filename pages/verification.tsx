import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Button from "../components/Button";
import InputAlt from "../components/InputAlt";
import axios from "axios";

type Props = {};

let codeArray: Array<number> = []

const Verification = (props: Props) => {
  const [pressedKey, setPressedKey] = useState(0)
  const router = useRouter()

  const handleKeyDown = (e:any) => {
    setPressedKey(e.keyCode)
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  

  const getCodeDigit = (e: any) => {
    let form: any = e.target.form
    const index = [...form].indexOf(e.target);
    let value = e.currentTarget.value 

    if(value.toString().length > 1) return false
    if (pressedKey === 8) {
      codeArray.splice(index, 1)
      if (index > 0) form.elements[index - 1].focus();
    } else {
      codeArray.push(value)
      if (index < 5) form.elements[index + 1].focus();
    }

    if(codeArray.length === 6) sendVerificationCode()
    e.preventDefault()
  }

  const sendVerificationCode = () => {
    let codeString = ""
    for(let i = 0 ; i < codeArray.length ; i++){
      codeString += codeArray[i].toString()
    }
    console.log(codeString)
    axios.post("http://localhost:4001/user/verifyAccount", {email:router.query.email, code:codeString})
      .then((res) => { console.log("Verified!"); })
      .catch((err) => { console.log(err.response.data) })
  }

  return (
    <div>
      <h2 className="text-2xl text-orange-600 p-2 align-center text-center font-bold">
        We send you an activation code to your email
      </h2>
      <div >
        <form className="flex justify-around mt-6">
          <InputAlt type="number" onChange={getCodeDigit}/>
          <InputAlt type="number" onChange={getCodeDigit}/>
          <InputAlt type="number" onChange={getCodeDigit}/>
          <InputAlt type="number" onChange={getCodeDigit}/>
          <InputAlt type="number" onChange={getCodeDigit}/>
          <InputAlt type="number" onChange={getCodeDigit}/>
        </form>
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
