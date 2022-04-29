import React, { ReactElement, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router"
import axios from "axios"
import ButtonCheckbox from "../../../components/ButtonCheckbox";
import DashboardLayout from "../../../layouts/DashboardLayout";
import Button from "../../../components/Button";
import {
  skills
} from "../../../constants/preferencesConstans";
import PreferencesCard from "../../../components/PreferencesCard";

type Props = {}

const preferencesObject: any = {}

const Skills = (props: Props) => {
  const [preferences, setPreferences] = useState<any>({ remote: true })
  const [cookies, setCookies] = useCookies(["accessToken", "isPreferences"])
  const router = useRouter()

  const getPreferences = (e: any) => {
    const checked = e.currentTarget.checked
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    if (preferencesObject[name] === undefined) preferencesObject[name] = []
    const preferencesArray = preferencesObject[name]
    if (checked) {
      preferencesArray.push(value)
    }
    else {
      const index = preferencesArray.indexOf(value)
      preferencesArray.splice(index, 1)
    }
    setPreferences(preferencesObject)
    console.log(preferencesObject)
  }

  const sendPreferences = () => {
    const headers = { Authorization: `Bearer ${cookies.accessToken}` }
    axios.post("http://localhost:4000/user/setSkillsPreferences", preferences, { headers: headers })
      .then((result) => { setCookies("isPreferences", true); router.push("/dashboard/workoffers") })
      .catch((error) => { console.log(error) })
  }

  return (
    <div className="container absolute bg-white secondPage">
      <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
        Skills
      </h1>

      <PreferencesCard className="grid grid-cols-3 justify-items-center gap-y-3">
        {skills.sort().map((skill) => (
          <ButtonCheckbox
            key={skill}
            label={skill}
            id={skill}
            name="skills"
            type="checkbox"
            className="justify-self-center"
            onClick={getPreferences}
          />
        ))}
      </PreferencesCard>

      <div className="flex justify-evenly">
        <Button value="Previous" className="bg-orange-600 text-white" onClick={() => {router.push("/preferences/work")}}/>
        <Button
          value="Start searching"
          className="bg-orange-600 text-white"
          onClick={sendPreferences}
        />
      </div>
    </div>
  )
}

Skills.getLayout = function getLayout(page:ReactElement) {
  return (
    <DashboardLayout>
        {page}
    </DashboardLayout>
  )
}

export default Skills