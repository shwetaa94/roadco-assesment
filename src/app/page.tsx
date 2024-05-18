"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import HighlightCard from "@/components/HighlightCard";

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <div className="m-6  text-3xl">Dashboard</div>
          <Dashboard />
        </div>
        <div>
          <HighlightCard />
        </div>
      </div>
    </Provider>
  );
};

export default Home;
