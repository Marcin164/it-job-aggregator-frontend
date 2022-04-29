import React, { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router"
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";

type Props = {};

const Verification = (props: Props) => {
  const router = useRouter()
  const [cookies] = useCookies(["isActive"])
  const [error, setError] = useState("")

  useEffect(() => {
    if (cookies.isActive === 'true') router.back()
  }, [])

  const getCode = (e: any) => {
    let value = e.currentTarget.value
    if (value.toString().length !== 6) setError("")
    if (value.toString().length === 6) sendCodeToVerify(value)
  }

  const sendCodeToVerify = (code: any) => {
    let email = router.query.email
    axios.post("http://localhost:4000/user/verifyAccount", { code, email })
      .then((res) => { router.push("/login") })
      .catch((err) => { setError(err.response.data) })
  }

  return (
    <div>
      <h2 className="text-2xl text-orange-600 p-2 align-center text-center font-bold">
        We send you an activation code to your email
      </h2>
      <div>
        <form className="flex justify-around mt-6 form">
          <Input type="number" onChange={getCode} />
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