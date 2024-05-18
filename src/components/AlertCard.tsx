import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const HighlightCard: React.FC = () => {
  const highlights = useSelector((state: RootState) => state.dashboard.highlights);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Today's Highlights
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Income: {highlights.income} CAD
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Expenses: {highlights.expenses} CAD
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;
