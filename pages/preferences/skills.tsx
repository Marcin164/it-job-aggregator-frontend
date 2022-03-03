import React from "react";
import ButtonCheckbox from "../../components/ButtonCheckbox";
import Button from "../../components/Button";
import {
  skills
} from "../../constants/preferencesConstans";
import PreferencesCard from "../../components/PreferencesCard";

type Props = {}

const Skills = (props: Props) => {
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
          type="checkbox"
          className="justify-self-center"
        />
      ))}
    </PreferencesCard>

    <div className="flex justify-evenly">
      <Button value="Previous" className="bg-orange-600 text-white" />
      <Button
        value="Start searching"
        className="bg-orange-600 text-white"
      />
    </div>
  </div>
  )
}

export default Skills