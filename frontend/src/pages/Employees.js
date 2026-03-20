import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Card,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import API from "../services/api";

const Employees = () => {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setRows(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "department", headerName: "Department", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Employees
      </Typography>

      <div style={{ display: "flex", gap: 10, marginBottom: 15 }}>
        <TextField
          label="Search"
          size="small"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant="contained" component={Link} to="/add-employee">
          Add Employee
        </Button>
      </div>

      <Card style={{ height: 400 }}>
        <DataGrid rows={rows} columns={columns} getRowId={(row) => row.id} />
      </Card>
    </>
  );
};

export default Employees;