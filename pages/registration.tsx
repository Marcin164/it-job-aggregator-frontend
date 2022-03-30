import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from "axios"
import Input from "../components/Input";
import Button from "../components/Button";

type Props = {}

let dataObject:any = {}

const Registration = (props: Props) => {
  const [repeatedPassword, setRepeatedPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [registerData, setRegisterData] = useState<any>({})

  const router = useRouter()

  const getValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const targetName:any = e.currentTarget.name
    const targetValue:any = e.currentTarget.value
    dataObject[targetName] = targetValue
    setRegisterData(dataObject)
  }

  const getRepeatedPassword = (e:React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault()
    const targetValue:any = e.currentTarget.value
    setRepeatedPassword(targetValue)
  }

  const sendData = () => {
    setErrorMessage("")
      if(repeatedPassword === dataObject.password){
        axios.post("http://localhost:4001/user/register", registerData)
        .then(() => {})
        .catch((err) => {getErrors(err)})
      }else{
        setErrorMessage("Not the same password!")
      } 

  }

  const getErrors = (error:any) => {
    if(error !== undefined) return Object.values(error.response.data.errors).forEach((res:any) => {setErrorMessage(res.properties.message)})
    return true
  }

  return (
    <div className=" flex flex-col items-center">
        <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
          Welcome again!
        </h1>
        <div className="text-red-600 text-lg h-[35px]">{errorMessage}</div>
        <Input label="Email" type="email" className="mt-5" name="email" onChange={getValue}/>
        <Input label="Password" type="password" className="mt-5" name="password" onChange={getValue}/>
        <Input label="Repeat Password" type="password" name="repeatPassword" className="mt-5" onChange={getRepeatedPassword}/>
        <Input label="Name" type="text" className="mt-5" name="name" onChange={getValue}/>
        <Input label="Surname" type="text" className="mt-5" name="surname" onChange={getValue}/>
        <Button value="Register" className="bg-orange-600 text-white mt-10" onClick={sendData}/>
      </div>
  )
}

export default Registration