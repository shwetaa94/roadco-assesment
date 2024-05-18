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

const ExpenseCard: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.dashboard.expenses);

  const data = {
    labels: ["Freight Charge", "Driver Charge", "Other Charges"],
    datasets: [
      {
        data: [expenses.freight, expenses.driver, expenses.other],
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
          Expenses
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
                Freight
              </Typography>
              <Box display="flex" alignItems="center">
                <LinearProgress
                  variant="determinate"
                  value={(expenses.freight / expenses.total) * 100}
                  style={{
                    flexGrow: 1,
                    marginRight: 8,
                    backgroundColor: "#FFF5E0",
                    height: "10px",
                  }}
                />
                <Typography variant="body2" color="textSecondary">
                  {expenses.freight}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="textSecondary">
                Driver
              </Typography>
              <Box display="flex" alignItems="center">
                <LinearProgress
                  variant="determinate"
                  value={(expenses.driver / expenses.total) * 100}
                  style={{
                    flexGrow: 1,
                    marginRight: 8,
                    backgroundColor: "#E0E0FF",
                    height: "10px",
                  }}
                />
                <Typography variant="body2" color="textSecondary">
                  {expenses.driver}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="textSecondary">
                Other
              </Typography>
              <Box display="flex" alignItems="center">
                <LinearProgress
                  variant="determinate"
                  value={(expenses.other / expenses.total) * 100}
                  style={{
                    flexGrow: 1,
                    marginRight: 8,
                    backgroundColor: "#E0FFF5",
                    height: "10px",
                  }}
                />
                <Typography variant="body2" color="textSecondary">
                  {expenses.other}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpenseCard;
