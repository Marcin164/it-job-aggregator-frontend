import React from "react";
import ButtonCheckbox from "../components/ButtonCheckbox";
import Input from "../components/Input";
import Button from "../components/Button";
import {
  cities,
  companies,
  types,
  levels,
  categories,
} from "../constants/preferencesConstans";
import PreferencesCard from "../components/PreferencesCard";
type Props = {};

const Preferences = (props: Props) => {
  return (
    <>
      <div className="container">
        <div className="container bg-white z-10">
          <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
            Place of work
          </h1>

          <PreferencesCard
            title="Would you like to work remote?"
            className="flex flex-wrap justify-center gap-y-3 gap-x-3"
          >
            <ButtonCheckbox
              label="Yes"
              id="Yes"
              type="checkbox"
              name="remote"
            />
            <ButtonCheckbox label="No" id="No" type="checkbox" name="remote" />
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
                type="checkbox"
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
                type="checkbox"
              />
            ))}
          </PreferencesCard>

          <div className="container flex justify-evenly">
            <Button value="Cancel" className="bg-orange-600 text-white" />
            <Button value="Next" className="bg-orange-600 text-white" />
          </div>
        </div>

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
                type="checkbox"
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
                type="checkbox"
              />
            ))}
          </PreferencesCard>

          <PreferencesCard
            title="How big salary, are you dreaming of?"
            className="container flex justify-around"
          >
            <Input label="Minimum" type="number" className="w-[150px]" />
            <Input label="Maximum" type="number" className="w-[150px]" />
          </PreferencesCard>

          <PreferencesCard title="What field of programming are you interest in?" className="grid grid-cols-3 justify-items-center gap-y-3">
          {categories.sort().map((category) => (
              <ButtonCheckbox
                key={category}
                label={category}
                id={category}
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
      </div>

      <div className="container flex justify-evenly">
        <Button value="Cancel" className="bg-orange-600 text-white" />
        <Button value="Next" className="bg-orange-600 text-white" />
      </div>
    </>
  );
};

export default Preferences;
