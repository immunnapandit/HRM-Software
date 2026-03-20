import React from "react";
import { TextField, Button, Card, Typography } from "@mui/material";
import API from "../services/api";

const Payroll = () => {
  const [month, setMonth] = React.useState("");

  const runPayroll = async () => {
    await API.post("/payroll/run", { month });
    alert("Payroll Done");
  };

  return (
    <Card style={{ padding: 20, maxWidth: 400 }}>
      <Typography variant="h6">Run Payroll</Typography>

      <TextField
        fullWidth
        label="Month"
        onChange={(e) => setMonth(e.target.value)}
        margin="normal"
      />

      <Button variant="contained" fullWidth onClick={runPayroll}>
        Process Payroll
      </Button>
    </Card>
  );
};

export default Payroll;