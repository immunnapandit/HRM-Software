import React from "react";
import {
  TextField,
  Button,
  Card,
  Typography,
} from "@mui/material";
import API from "../services/api";

const AddEmployee = () => {
  const [form, setForm] = React.useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    await API.post("/employees", form);
    alert("Employee Added");
  };

  return (
    <Card style={{ padding: 20, maxWidth: 500 }}>
      <Typography variant="h6">Add Employee</Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Department"
        name="department"
        onChange={handleChange}
        margin="normal"
      />

      <Button
        variant="contained"
        fullWidth
        onClick={submit}
        style={{ marginTop: 15 }}
      >
        Save
      </Button>
    </Card>
  );
};

export default AddEmployee;