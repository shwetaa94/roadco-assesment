import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseCard: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.dashboard.expenses);

  const data = {
    labels: ["freight", "driver", "other"],
    datasets: [
      {
        data: [expenses.freight, expenses.driver, expenses.other],
        backgroundColor: ["#7464FF", "#4FD2B5", "#FFCB49"],
        hoverBackgroundColor: ["#A99EFF", "#80EAD0", "#FFE389"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow">
      <div className="mb-4">
        <h6 className="m-0">expenses</h6>
      </div>
      <div className="flex justify-center items-center h-40">
        <Doughnut data={data} options={options} />
      </div>
      <div className="mt-4">
        <div className="flex-col gap">
          <div className="flex justify-between bg-gradient-to-l from-[#FFCB49]  to-[#f2f4c2] p-2 mb-2 rounded">
            <span className="text-sm font-semibold">Upcoming</span>

            <span className="text-sm font-semibold">{expenses.freight}</span>
          </div>
          <div className="flex justify-between bg-gradient-to-l from-[#7464FF] to-[#dedee0]   p-2 mb-2 rounded">
            <span className="text-sm font-semibold">Ongoing</span>

            <span className="text-sm font-semibold">{expenses.driver}</span>
          </div>
          <div className="flex justify-between p-2 mb-2 bg-gradient-to-l from-[#4FD2B5]  to-[#e8f8f4] rounded">
            <span className="text-sm font-semibold">Completed</span>
            <span className="text-sm font-semibold">{expenses.other}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
