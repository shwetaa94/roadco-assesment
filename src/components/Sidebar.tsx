import React, { ReactNode } from "react";
import { BsTruck } from "react-icons/bs";
import { GrFastForward, GrMultiple } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuClipboardList, LuWallet } from "react-icons/lu";
import { MdOutlineBusAlert } from "react-icons/md";
import { PiSuitcaseSimple, PiTelevisionSimpleBold } from "react-icons/pi";
import { PiSquaresFour } from "react-icons/pi";
import { TbBus, TbTruckDelivery } from "react-icons/tb";

const logo: ReactNode[] = [
  <PiSquaresFour />,
  <PiTelevisionSimpleBold />,
  <GrFastForward />,
  <LuClipboardList />,
  <MdOutlineBusAlert />,
  <BsTruck />,
  <TbTruckDelivery />,
  <PiSuitcaseSimple />,
  <LuWallet />,
  <GrMultiple />,
  <IoSettingsOutline />,
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-10 ml-5 mt-5 ">
      <svg
        className="my-5"
        width="32"
        height="29"
        viewBox="0 0 32 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="19" r="9" stroke="#1AEA22" strokeWidth="2" />
        <circle cx="22" cy="19" r="9" stroke="#EA1414" strokeWidth="2" />
        <circle cx="16" cy="10" r="9" stroke="#2429A9" strokeWidth="2" />
      </svg>
      <div className="flex-col ">
        {logo.map((item: ReactNode, index: number) => (
          <div key={index} className="text-3xl font-light text-slate-600 mb-4 ">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
