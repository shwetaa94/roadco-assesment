import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueCard: React.FC = () => {
  const revenue = useSelector((state: RootState) => state.dashboard.revenue);

  const data = {
    labels: ["Upcoming", "Ongoing", "Completed"],
    datasets: [
      {
        data: [revenue.upcoming, revenue.ongoing, revenue.completed],
        backgroundColor: ["#FFD700", "#8A2BE2", "#00FA9A"],
        hoverBackgroundColor: ["#FFC107", "#8B3A62", "#00FF7F"],
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
    <Card>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Revenue
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="150px"
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box mt={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="textSecondary">
                Upcoming
              </Typography>
              <Box display="flex" alignItems="center">
                <LinearProgress
                  variant="determinate"
                  value={(revenue.upcoming / revenue.total) * 100}
                  style={{
                    flexGrow: 1,
                    marginRight: 8,
                    backgroundColor: "#FFF5E0",
                    height: "10px",
                  }}
                />
                <Typography variant="body2" color="textSecondary">
                  {revenue.upcoming}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="textSecondary">
                Ongoing
              </Typography>
              <Box display="flex" alignItems="center">
                <LinearProgress
                  variant="determinate"
                  value={(revenue.ongoing / revenue.total) * 100}
                  style={{
                    flexGrow: 1,
                    marginRight: 8,
                    backgroundColor: "#E0E0FF",
                    height: "10px",
                  }}
                />
                <Typography variant="body2" color="textSecondary">
                  {revenue.ongoing}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="textSecondary">
                Completed
              </Typography>
              <Box display="flex" alignItems="center">
                <LinearProgress
                  variant="determinate"
                  value={(revenue.completed / revenue.total) * 100}
                  style={{
                    flexGrow: 1,
                    marginRight: 8,
                    backgroundColor: "#E0FFF5",
                    height: "10px",
                  }}
                />
                <Typography variant="body2" color="textSecondary">
                  {revenue.completed}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RevenueCard;
