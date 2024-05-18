import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  orders: {
    total: number;
    upcoming: number;
    ongoing: number;
    completed: number;
  };
  trips: {
    total: number;
    upcoming: number;
    ongoing: number;
    completed: number;
  };
  revenue: {
    total: number;
    upcoming: number;
    ongoing: number;
    completed: number;
  };
  expenses: { total: number; freight: number; driver: number; other: number };
  highlights: { income: number; expenses: number };
  activities: { name: string; message: string }[];
  alerts: { title: string; subheading: string; message: string }[];
}

const initialState: DashboardState = {
  orders: { total: 123456, upcoming: 50, ongoing: 100, completed: 50 },
  trips: { total: 123456, upcoming: 50, ongoing: 100, completed: 50 },
  revenue: { total: 123456, upcoming: 50, ongoing: 100, completed: 50 },
  expenses: { total: 123456, freight: 50, driver: 100, other: 50 },
  highlights: { income: 100000, expenses: 50000 },
  activities: [{name:"shweta", message:"hello"}],
  alerts: [{title: "Driver Raised Concern",subheading: "Load No : 12454, Bill To : RoaDo demo Bangalore", message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"},
           {title: "Reefer Temp. out of range",subheading:"Load No : 12454, Bill To : RoaDo demo Bangalore",  message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"},
],
};


const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setActivities(state, action: PayloadAction<any[]>) {
      state.activities = action.payload;
    },
    setAlerts(state, action: PayloadAction<any[]>) {
      state.alerts = action.payload;
    },
  },
});

export const { setActivities, setAlerts } = dashboardSlice.actions;
export default dashboardSlice.reducer;
