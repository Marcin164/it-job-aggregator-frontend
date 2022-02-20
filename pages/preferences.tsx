import React from "react";
import ButtonCheckbox from "../components/ButtonCheckbox";
import { cities } from "../constants/preferencesConstans";
type Props = {};

const Preferences = (props: Props) => {
  return (
    <div>
      <h1 className="text-5xl text-orange-600 p-2 align-center text-center font-bold">
        Place of work
      </h1>
      <h2 className="text-2xl text-orange-600 p-2 align-center text-center font-bold">
        Would you like to work remote?
      </h2>
      <ButtonCheckbox label="Yes" id="Yes" type="checkbox" name="remote" />
      <ButtonCheckbox label="No" id="No" type="checkbox" name="remote" />

      <h2 className="text-2xl text-orange-600 p-2 align-center text-center font-bold">
        Where would you like to work?
      </h2>
      <div className="container flex flex-wrap justify-center gap-y-3 ">
        {cities.sort().map((city) => (
          <ButtonCheckbox key={city} label={city} id={city} type="checkbox" />
        ))}
      </div>

      <h2 className="text-2xl text-orange-600 p-2 align-center text-center font-bold">
        What kind of company are you interested in?
      </h2>
      <h2 className="text-2xl text-orange-600 p-2 align-center text-center font-bold">
        In what projects you want to participate?
      </h2>
    </div>
  );
};

export default Preferences;
