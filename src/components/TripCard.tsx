import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const TripCard: React.FC = () => {
  const trips = useSelector((state: RootState) => state.dashboard.trips);

  const data = {
    labels: ["Upcoming", "Ongoing", "Completed"],
    datasets: [
      {
        data: [trips.upcoming, trips.ongoing, trips.completed],
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
        <h6 className="m-0">trips</h6>
      </div>
      <div className="flex justify-center items-center h-40">
        <Doughnut data={data} options={options} />
      </div>
      <div className="mt-4">
        <div className="flex-col gap">
          <div className="flex justify-between bg-gradient-to-l from-[#FFCB49]  to-[#f2f4c2] p-2 mb-2 rounded">
            <span className="text-sm font-semibold">Upcoming</span>

            <span className="text-sm font-semibold">{trips.upcoming}</span>
          </div>
          <div className="flex justify-between bg-gradient-to-l from-[#7464FF] to-[#dedee0]   p-2 mb-2 rounded">
            <span className="text-sm font-semibold">Ongoing</span>

            <span className="text-sm font-semibold">{trips.ongoing}</span>
          </div>
          <div className="flex justify-between p-2 mb-2 bg-gradient-to-l from-[#4FD2B5]  to-[#e8f8f4] rounded">
            <span className="text-sm font-semibold">Completed</span>
            <span className="text-sm font-semibold">{trips.completed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
