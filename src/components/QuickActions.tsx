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
    <div className="flex text-white">
      {list.map((x, index) => (
        <div
          className=" bg-slate-500 m-4 w-[230px] p-4 text-center"
          key={index}
        >
          <div className="w-[200px] h-[80px] flex justify-center items-center">
            <div className="text-4xl">{x.logo}</div>
          </div>
          <div className="text-xl font-semibold">{x.name}</div>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
