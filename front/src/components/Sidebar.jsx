import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  CssBaseline,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Francisco Avelar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/prueba1_1">
            <ListItemText primary="Prueba 1.1" />
          </ListItem>
          <ListItem button component={Link} to="/prueba1_2">
            <ListItemText primary="Prueba 1.2" />
          </ListItem>
          <ListItem button component={Link} to="/prueba1_3">
            <ListItemText primary="Prueba 1.3" />
          </ListItem>
          <ListItem button component={Link} to="/prueba2_1">
            <ListItemText primary="Prueba 2.1" />
          </ListItem>
          <ListItem button component={Link} to="/prueba2_2">
            <ListItemText primary="Prueba 2.2" />
          </ListItem>
          <ListItem button component={Link} to="/prueba2_3">
            <ListItemText primary="Prueba 2.3" />
          </ListItem>
          <ListItem button component={Link} to="/prueba3_1">
            <ListItemText primary="Prueba 3.1" />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
        }}
      >
        <Offset />
        <Outlet />
      </Box>
    </Box>
  );
}
