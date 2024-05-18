import React from "react";
import OrderCard from "./OrderCard";
import TripCard from "./TripCard";
import RevenueCard from "./RevenueCard";
import ExpenseCard from "./ExpenseCard";
import HighlightCard from "./HighlightCard";
import AlertCard from "./AlertCard";
import QuickActions from "./QuickActions";
import { Grid, Container } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <div className="flex-col gap-3 px-4 bg-blue-50">
      <div className="p-6  text-3xl">Dashboard</div>
      <div className="flex gap-2">
        <div className="w-60">
          <OrderCard />
        </div>
        <div className="w-60">
          <TripCard />
        </div>
        <div className="w-60">
          <RevenueCard />
        </div>
        <div className="w-64">
          <ExpenseCard />
        </div>
      </div>

      <div className="my-4 ">
        <QuickActions />
      </div>
      <div>
        <AlertCard />
      </div>
    </div>
  );
};

export default Dashboard;
