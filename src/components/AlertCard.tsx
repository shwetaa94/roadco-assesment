import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AlertCard: React.FC = () => {
  const alerts = useSelector((state: RootState) => state.dashboard.alerts);

  return (
    <div className="w-screen">
      <div className="text-3xl mb-4 font-semibold">High Priority Alerts</div>
      <div className="flex gap-3">
        {alerts.map((alert, index) => (
          <div className=" w-[348px]  border p-4 ">
            <div className="text-xl font-semibold">{alert.title}</div>
            <div className="text-xs mb-3">{alert.subheading}</div>
            <div className="text-sm">{alert.message}</div>
            <div className="flex justify-around m-4">
              <div className="h-[30px] w-[73px] p-3 text-[#1A3875] underline">
                Ignore
              </div>
              <button className="h-[40px] p-2 rounded-md bg-[#1A3875] text-white">
                Resolve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertCard;
