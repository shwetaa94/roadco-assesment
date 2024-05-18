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
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={10} md={3}>
          <OrderCard />
        </Grid>
        <Grid item xs={10} md={3}>
          <TripCard />
        </Grid>
        <Grid item xs={10} md={3}>
          <RevenueCard />
        </Grid>
        <Grid item xs={10} md={3}>
          <ExpenseCard />
        </Grid>
        <Grid item xs={10}>
          <QuickActions />
        </Grid>
        <Grid item xs={10} md={6}>
          <AlertCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
