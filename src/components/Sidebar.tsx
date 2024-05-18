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
    <div className="w-10 ml-5 mt-5">
      <div className="flex-col ">
        {logo.map((item: ReactNode, index: number) => (
          <div key={index} className="text-xl mb-3 ">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
