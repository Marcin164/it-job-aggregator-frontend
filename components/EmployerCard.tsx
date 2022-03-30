import React from "react";

type Props = {};

const EmployerCard = (props: Props) => {
  return (
    <div className="w-[180px] h-[260px] bg-gray-200 rounded-xl my-4">
      <img src="" alt="" className="w-full h-[180px] overflow-hidden" />
      <div className="w-full h-[80px] flex justify-center items-center overflow-hidden">
        <h1 className="text-3xl text-gray-500 font-bold">Firma XYZ</h1>
      </div>
    </div>
  );
};

export default EmployerCard;