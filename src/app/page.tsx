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
      <div className=" w-screen flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="">
          <Dashboard />
        </div>
        <div className="">
          <HighlightCard />
        </div>
      </div>
    </Provider>
  );
};

export default Home;
