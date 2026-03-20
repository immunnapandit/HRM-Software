import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* HEADER */}
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(90deg,#6366f1,#4f46e5)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">HRM Pro</Typography>
          <Avatar>MK</Avatar>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#0f172a",
            color: "#fff",
            paddingTop: "70px",
          },
        }}
      >
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton component={Link} to="/employees">
            <ListItemText primary="Employees" />
          </ListItemButton>

          <ListItemButton component={Link} to="/payroll">
            <ListItemText primary="Payroll" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;