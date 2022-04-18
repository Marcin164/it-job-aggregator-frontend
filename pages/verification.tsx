import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router"
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";

type Props = {};

const Verification = (props: Props) => {
  const router = useRouter()
  const [cookies, setCookies] = useCookies(["accessToken","isActive"])
  const [error, setError] = useState("")

  useEffect(() => {
    router.push("/login")
    if(cookies.isActive === 'true') router.back()
  }, [])

  const getCode = (e:any) => {
    let value = e.currentTarget.value
    console.log(value.toString().length)
    if(value.toString().length === 6) sendCodeToVerify(value)
  }

  const sendCodeToVerify = (code:any) => {
    console.log("Dziala")
    const headers = {Authorization: `Bearer ${cookies.accessToken}`}
    axios.post("http://localhost:4000/user/verifyAccount", {code}, {headers: headers})
    .then((res) => {setCookies("accessToken", true); router.push("/preferences/work ")})
    .catch((err) => {setError(err.response.data)})
  }

  return (
    <div>
      <h2 className="text-2xl text-orange-600 p-2 align-center text-center font-bold">
        We send you an activation code to your email
      </h2>
      <div>
        <form className="flex justify-around mt-6 form">
          <Input type="number" onChange={getCode}/>
        </form>
      </div>
      <div className="flex justify-center">
        <Button
          value="Resend Code"
          className="bg-orange-600 text-white mt-10"
        />
      </div>
      <div className="flex justify-center text-red-600">{error}</div>
    </div>
  );
};

export default Verification;