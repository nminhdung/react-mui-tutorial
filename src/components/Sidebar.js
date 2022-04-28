import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";

import React from "react";

function Sidebar({mode,setMode}) {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
    <Box position="fixed">
    <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
              <ListItemIcon>
                  <Home/>
              </ListItemIcon>
              <ListItemText primary="Home page"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#account">
              <ListItemIcon>
                  <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Account Box"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#article">
              <ListItemIcon>
                  <Article/>
              </ListItemIcon>
              <ListItemText primary="Article"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#group">
              <ListItemIcon>
                  <Group/>
              </ListItemIcon>
              <ListItemText primary="Group"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#person">
              <ListItemIcon>
                  <Person/>
              </ListItemIcon>
              <ListItemText primary="Person"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#storefront">
              <ListItemIcon>
                  <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Storefront"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                  <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#modenight">
              <ListItemIcon>
                  <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode ==="light" ? "dark": "light")}/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
      
    </Box>
  );
}

export default Sidebar;
