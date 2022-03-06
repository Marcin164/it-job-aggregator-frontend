import Image from "next/image";
import React, {useState} from "react";
import NavButton from "./NavButton";

type Props = {};

const Navbar = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const changeIsVisible = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true)
  }

  return (
    <div className="w-full h-[40px] relative">
      <div className="w-[100px] h-full flex justify-center items-center float-left">
        <span className="font-bold text-2xl text-orange-600">LOGO</span>
      </div>
      <button className="w-[40px] h-full float-right mr-2" onClick={changeIsVisible}><Image src="/menu-burger.svg" alt="" width="40px" height="40px"/></button>
      <div className={`${isVisible ? "block" : "hidden"} w-[190px] absolute top-[40px] right-0 bg-gray-200 z-10`}>
        <div className="text-orange-600 p-2">Marcin Nowakowski</div>
        <NavButton>Work offers</NavButton>
        <NavButton>Employers</NavButton>
        <NavButton>Settings</NavButton>
        <NavButton>
          <span className="mr-2">Log out</span>
          <Image src="/sign-out-alt.svg" alt="right" width="15" height="15"/>
        </NavButton>
      </div>
    </div>
  );
};

export default Navbar;
