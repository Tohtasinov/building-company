import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  TextField,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation
import "./NavBar.css";

const Navbar = () => {
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (id) => {
    console.log("Scrolling to section:", id);
    const element = document.getElementById(id);
    if (element) {
      console.log("Element found:", element);
      element.scrollIntoView({ behavior: "smooth" });
      toggleDrawer();
    } else {
      console.log("Element not found");
    }
  };

  return (
    <Box position="fixed" width="100%">
      <nav className="navbar">
        <div className="navbar__brand">INTERMARKETING</div>
        {isSmallScreen ? (
          <>
            <IconButton
              className="menu__icon"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              sx={{ color: "white" }}
            >
              <List>
                <ListItemButton
                  onClick={() => scrollToSection("Home")}
                  color="white !important"
                  primary={t("navbar.home")} // Используем переводы через хук useTranslation
                >
                  <ListItemText
                    primary={t("Главное")}
                    sx={{ color: "white !important" }}
                  />
                </ListItemButton>
                <ListItemButton onClick={() => scrollToSection("About")}>
                  <ListItemText primary={t("Наши услуги")} />
                </ListItemButton>
                <ListItemButton onClick={() => scrollToSection("FAQ")}>
                  <ListItemText primary={t("FAQ")} />
                </ListItemButton>
                <ListItemButton onClick={() => scrollToSection("Contacts")}>
                  <ListItemText primary={t("Контакты")} />
                </ListItemButton>
              </List>
            </Drawer>
          </>
        ) : (
          <ul className="navbar__links">
            <li>
              <Button onClick={() => scrollToSection("Home")}>
                {t("Главное")}
              </Button>
            </li>
            <li>
              <Button onClick={() => scrollToSection("About")}>
                {t("Наши услуги")}
              </Button>
            </li>
            <li>
              <Button onClick={() => scrollToSection("FAQ")}>{t("FAQ")}</Button>
            </li>
            <li>
              <Button onClick={() => scrollToSection("Contacts")}>
                {t("Контакты")}
              </Button>
            </li>
          </ul>
        )}
      </nav>
    </Box>
  );
};

export default Navbar;
