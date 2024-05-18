import React, { ReactNode } from "react";
import { BsTruck } from "react-icons/bs";
import { GrFastForward, GrMultiple } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuClipboardList, LuWallet } from "react-icons/lu";
import { MdOutlineBusAlert } from "react-icons/md";
import { PiSuitcaseSimple, PiTelevisionSimpleBold, PiSquaresFour } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

const logos: { id: number; icon: ReactNode }[] = [
  { id: 1, icon: <PiSquaresFour /> },
  { id: 2, icon: <PiTelevisionSimpleBold /> },
  { id: 3, icon: <GrFastForward /> },
  { id: 4, icon: <LuClipboardList /> },
  { id: 5, icon: <MdOutlineBusAlert /> },
  { id: 6, icon: <BsTruck /> },
  { id: 7, icon: <TbTruckDelivery /> },
  { id: 8, icon: <PiSuitcaseSimple /> },
  { id: 9, icon: <LuWallet /> },
  { id: 10, icon: <GrMultiple /> },
  { id: 11, icon: <IoSettingsOutline /> },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-10 ml-5 mt-5">
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
      <div className="flex-col">
        {logos.map((item) => (
          <div key={item.id} className="text-3xl font-light text-slate-600 mb-4">
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
