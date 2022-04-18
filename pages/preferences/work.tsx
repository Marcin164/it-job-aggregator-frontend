import React, { useEffect, useState } from "react";
import ButtonCheckbox from "../../components/ButtonCheckbox";
import ButtonRadio from "../../components/ButtonRadio";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  cities,
  companies,
  types,
  levels,
  categories,
} from "../../constants/preferencesConstans";
import PreferencesCard from "../../components/PreferencesCard";
import axios from "axios"

const preferencesObject:any = {}

const Work = () => {
  const [preferences, setPreferences] = useState<any>({remote: true})

  const getPreferences = (e: any) => {
    const checked = e.currentTarget.checked
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    if(preferencesObject[name] === undefined) preferencesObject[name] = []
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

  const getSalary = (e: any) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    preferencesObject[name] = value
    setPreferences(preferencesObject)
    console.log(preferencesObject)
  }

  const getRemote = (e:any) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    const boolValue = (value === 'Yes')
    preferencesObject[name] = boolValue
    setPreferences(preferencesObject)
    console.log(preferencesObject)
  }

  const sendPreferences = () => {
    axios.post("http://localhost:4000/user/setWorkPreferences")
  }

  return (
    <div className="container firstPage">

      <div className="container bg-white z-10">
        <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
          Place of work
        </h1>

        <PreferencesCard
          title="Would you like to work remote?"
          className="flex flex-wrap justify-center gap-y-3 gap-x-3"
        >
          <ButtonRadio id="Yes" name="isRemote" value="Yes" onClick={getRemote}/>
          <ButtonRadio id="No" name="isRemote" value="No" onClick={getRemote}/>        
        </PreferencesCard>

        <PreferencesCard
          title="Where would you like to work?"
          className="grid grid-cols-3 justify-items-center gap-y-3"
        >
          {cities.sort().map((city) => (
            <ButtonCheckbox
              key={city}
              label={city}
              id={city}
              name="placeOfWork"
              type="checkbox"
              onClick={getPreferences}
            />
          ))}
        </PreferencesCard>

        <PreferencesCard
          title="What kind of company are you interested in?"
          className="grid grid-cols-3 justify-items-center gap-y-3"
        >
          {companies.sort().map((company) => (
            <ButtonCheckbox
              key={company}
              label={company}
              id={company}
              name="favouriteCompany"
              type="checkbox"
              onClick={getPreferences}
            />
          ))}
        </PreferencesCard>
      </div>
      {/* end of place of work container*/}

      {/* start of terms of emplyment container*/}
      <div className="container bg-white">
        <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
          Terms of employment
        </h1>

        <PreferencesCard
          title="On what level of experience you want to work?"
          className="grid grid-cols-3 justify-items-center gap-y-3"
        >
          {levels.sort().map((level) => (
            <ButtonCheckbox
              key={level}
              label={level}
              id={level}
              name="levelOfExperience"
              type="checkbox"
              onClick={getPreferences}
            />
          ))}
        </PreferencesCard>

        <PreferencesCard
          title="What type of employment is best for you?"
          className="grid grid-cols-3 justify-items-center gap-y-3"
        >
          {types.sort().map((type) => (
            <ButtonCheckbox
              key={type}
              label={type}
              id={type}
              name="typeOfEmployment"
              type="checkbox"
              onClick={getPreferences}
            />
          ))}
        </PreferencesCard>

        <PreferencesCard
          title="How big salary, are you dreaming of?"
          className="container flex justify-around"
        >
          <Input label="Minimum" type="number" className="w-[150px]" name="minSalary" onChange={getSalary}/>
          <Input label="Maximum" type="number" className="w-[150px]" name="maxSalary" onChange={getSalary}/>
        </PreferencesCard>

        <PreferencesCard
          title="What field of programming are you interest in?"
          className="grid grid-cols-3 justify-items-center gap-y-3"
        >
          {categories.sort().map((category) => (
            <ButtonCheckbox
              key={category}
              label={category}
              id={category}
              name="fieldOfProgramming"
              type="checkbox"
              className="justify-self-center"
              onClick={getPreferences}
            />
          ))}
        </PreferencesCard>
      </div>

      <div className="container flex justify-evenly">
        <Button value="Cancel" className="bg-orange-600 text-white" />
        <Button value="Next" className="bg-orange-600 text-white" />
      </div>
      {/* end of terms of emplyment container*/}
    </div>
  )
}

export default Work