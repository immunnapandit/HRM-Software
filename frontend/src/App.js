import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import Payroll from "./pages/Payroll";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/payroll" element={<Payroll />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;