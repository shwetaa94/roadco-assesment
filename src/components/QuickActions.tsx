import React, { ReactNode } from "react";
import { BsTruck, BsTruckFlatbed } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GrFastForward } from "react-icons/gr";
import { LuTruck } from "react-icons/lu";

const list: { name: string; logo: ReactNode }[] = [
  {
    name: "Create Indents",
    logo: <GrFastForward />,
  },
  {
    name: "Add Vehicle",
    logo: <BsTruck />,
  },
  {
    name: "Add Trailer",
    logo: <BsTruckFlatbed />,
  },
  {
    name: "Add Driver",
    logo: <FaRegUser />,
  },
  {
    name: "Add Indents",
    logo: <LuTruck />,
  },
];

const QuickActions: React.FC = () => {
  return (
    <div className="flex ">
      {list.map((x, index) => (
        <div
          className="  m-2  px-8 py-2 text-center border-r-2 border-r-slate-400"
          key={index}
        >
          <div className="w-[120px] h-[40px] flex justify-center items-center">
            <div className="text-4xl text-slate-700 ">{x.logo}</div>
          </div>
          <div className="text-md font-semibold">{x.name}</div>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
