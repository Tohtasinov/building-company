import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (id) => {
    console.log("Scrolling to section:", id);
    const element = document.getElementById(id);
    if (element) {
      console.log("Element found:", element);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Element not found");
    }
  };

  return (
    <Box position="fixed" width="100%">
      <nav className="navbar" width="100%">
        <div className="navbar__brand">INTERMARKETING</div>
        {window.innerWidth < 450 ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
              <List>
                <ListItemButton onClick={() => scrollToSection("Home")}>
                  <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton onClick={() => scrollToSection("About")}>
                  <ListItemText primary="About Us" />
                </ListItemButton>
                <ListItemButton onClick={() => scrollToSection("Appartments")}>
                  <ListItemText primary="Apartments" />
                </ListItemButton>
                <ListItemButton onClick={() => scrollToSection("Contacts")}>
                  <ListItemText primary="Contacts" />
                </ListItemButton>
              </List>
            </Drawer>
          </>
        ) : (
          <ul className="navbar__links">
            <li>
              <Button onClick={() => scrollToSection("Home")}>Home</Button>
            </li>
            <li>
              <Button onClick={() => scrollToSection("About")}>About Us</Button>
            </li>
            <li>
              <Button onClick={() => scrollToSection("Appartments")}>
                Apartments
              </Button>
            </li>
            <li>
              <Button onClick={() => scrollToSection("Contacts")}>
                Contacts
              </Button>
            </li>
          </ul>
        )}
      </nav>
    </Box>
  );
};

export default Navbar;
