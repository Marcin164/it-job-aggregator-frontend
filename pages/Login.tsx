import React, { useState, useEffect } from "react";
import axios from "axios"
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router"

const loginDataObject:any = {}

const Login = () => {
  const [loginData, setLoginData] = useState<any>({})
  const [cookies, setCookies] = useCookies(["accessToken", "refreshToken", "isActive", "isPreferences"])
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()  

  useEffect(() => {
    if(cookies.accessToken !== undefined) router.back()
  }, [])
  

  const setAllCookies = async (tokens:any) =>{
      setCookies("accessToken", tokens.accessToken)
      setCookies("refreshToken", tokens.refreshToken)
      setCookies("isActive", tokens.isActive)
      setCookies("isPreferences", tokens.isPreferences)
  }

  const routing = () => {
    if(cookies.isActive.toString() === "false") router.push({pathname: "/verification", query: {email: loginData.email}})
    if(cookies.isPreferences.toString() === "false") router.push({pathname: "/dashboard/preferences/work"})
    if(cookies.isActive.toString() === "true" && cookies.isPreferences.toString() === "true") router.push({pathname: "/dashboard/workoffers"})
  }

  const login = async () => {
    try {
      let login = await axios.post("http://localhost:4000/user/login", loginData) 

      if(!login) throw "Logging failed!"

      setAllCookies(login.data.tokens) 

      routing()
      
    } catch (error:any) {
      console.dir(error)
      setErrorMessage(error.message)
    }
  }

  const getLoginData = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const targetName:any = e.currentTarget.name
    const targetValue:any = e.currentTarget.value    
    loginDataObject[targetName] = targetValue
    setLoginData(loginDataObject) 
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
          Welcome again!
        </h1>
        <div className="text-red-600 text-lg h-[35px]">{errorMessage}</div>
        <Input label="Email" type="text" name="email" value={router.query.email?.toString()} onChange={getLoginData}/>
        <Input label="Password" type="password" name="password" onChange={getLoginData}/>
        <Button value="Forgot password?" className="text-orange-600" />
        <Button value="Log In" className="bg-orange-600 text-white" onClick={login}/>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
          Are you new?
        </h1>
        <Button value="Create account" className="bg-orange-600 text-white mt-8" onClick={() => {router.push("/registration")}}/>
      </div>
    </>
  );
};

export default Login;
