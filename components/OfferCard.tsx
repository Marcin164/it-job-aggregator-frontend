import React from "react";
import Skill from "../components/Skill";
import Button from "../components/Button";
import Info from "./Info";

type Props = {};

const OfferCard = (props: Props) => {
  return (
    <div className="w-11/12 bg-gray-200 rounded p-4 my-4">
      <div></div>

      <div className="w-full">
        <h1 className="font-bold text-2xl">React Frontend Developer</h1>
        <h2 className="font-bold text-orange-600 text-xl">Junior</h2>
        <div className="flex flex-wrap">
          <Skill value="React" />
          <Skill value="Redux" />
          <Skill value="Typescript" />
          <Skill value="GraphQL" />
          <Skill value="Tailwind" />
        </div>
      </div>

      <div className="w-full mt-2">
        <h1 className="font-bold text-orange-600 text-2xl">6000-8000</h1>
        <Info value="FirmaXYZ" />
        <Info value="Wrocław, Grecka" />
        <Info value="Fully remote" />
        <Button className="bg-orange-600 text-white" value="Add to favourite" />
      </div>
    </div>
  );
};

export default OfferCard;
