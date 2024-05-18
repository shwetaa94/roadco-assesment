import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const HighlightCard: React.FC = () => {
  const highlights = useSelector(
    (state: RootState) => state.dashboard.highlights
  );

  return (
    <div className="px-4">
      <div className="text-2xl font-semibold mt-6 ">Highlights(6) </div>
      <span className="text-sm">Date:18/May/2024</span>
      <div className="flex mt-3">
        <div className="flex-col gap-3 p-4 m-2 border">
          <div className="font-medium">Income</div>
          <div className="text-md text-green-500">{highlights.income} CAD</div>
          <div className="text-xs ">Two payment recieved</div>
        </div>
        <div className="flex-col gap-3 p-4 m-2 border">
          <div className="font-medium">Expenses</div>
          <div className="text-md  text-red-600">{highlights.expenses} CAD</div>
          <div className="text-sm ">Five payment Paid</div>
        </div>
      </div>
      {/* completed activit */}
      <div>
        <div className="text-md font-semibold m-4">Completed Activites(14)</div>
        <div className="text-xs mx-4">
          <div className="border p-3">
            <span className="text-violet-900">Gurpreet Singh </span>(Dispatch
            team) has created Load No. I-I-AAA-1325
          </div>
          <div className="border p-3">
            <span className="text-violet-900"> Aman</span> (Driver) Picked Up
            goods at Location_Name for Load No. I-I-AAA-1325
          </div>
          <div className="border p-3">
            <span className="text-violet-900">Gurpreet Singh </span> (Dispatch
            team) has created Load No. I-I-AAA-1325
          </div>
          <div className="border p-3">
            <span className="text-violet-900">Gurpreet Singh</span> (Dispatch
            team) has created Load No. I-I-AAA-1325
          </div>
        </div>
      </div>
      {/* schedukled activites */}
      <div>
        <div className="text-md font-semibold m-4">Completed Activites(14)</div>
        <div className="text-xs mx-4">
          <div className="border p-3">
            Load No. I-I-AAA-1325 will be delivered by Aman (Driver)
          </div>
          <div className="border p-3">
            <span className="text-violet-900"> Aman </span> (Driver) will Picked
            Up goods at Location_Name for Load No. I-I-AAA-1325
          </div>
          <div className="border p-3">
            Load No. I-I-AAA-1325 will start added by Gurpreet Singh
          </div>
          <div className="border p-3">
            Load No. I-I-AAA-1325 will start added by Gurpreet Singh
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
