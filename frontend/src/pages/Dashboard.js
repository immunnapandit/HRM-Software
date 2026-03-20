import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
  const card = (bg) => ({
    background: bg,
    color: "#fff",
    borderRadius: 4,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card sx={card("#6366f1")}>
            <CardContent>
              <Typography>Total Employees</Typography>
              <Typography variant="h4">50</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={card("#22c55e")}>
            <CardContent>
              <Typography>Active Employees</Typography>
              <Typography variant="h4">40</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={card("#f59e0b")}>
            <CardContent>
              <Typography>Payroll</Typography>
              <Typography variant="h4">₹5L</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;