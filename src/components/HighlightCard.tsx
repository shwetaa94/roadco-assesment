import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const HighlightCard: React.FC = () => {
  const highlights = useSelector(
    (state: RootState) => state.dashboard.highlights
  );

  return (
    <div className="">
      <div className="text-3xl font-semibold mt-6 ">Highlights(6) </div>
      <span>Date:18/May/2024</span>
      <div className="flex mt-3">
        <div className="flex-col gap-3 p-4 m-2 border">
          <div>Income</div>
          <div className="text-2xl text-green-500">{highlights.income}</div>
          <div>Two payment recieved</div>
        </div>
        <div className="flex-col gap-3 p-4 m-2 border">
          <div>Expenses</div>
          <div className="text-2xl text-red-600">{highlights.expenses}</div>
          <div>Five payment Paid</div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
