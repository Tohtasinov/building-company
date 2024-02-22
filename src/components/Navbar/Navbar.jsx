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
  Menu,
  TextField,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import "./NavBar.css";
import { useLanguage } from "../../LanguageContext"; // Импорт контекста

const languages = {
  ru: {
    home: "Главная",
    about: "О нас",
    faq: "FAQ",
    contacts: "Контакты",
  },
  kg: {
    home: "Башкы бет",
    about: "Биз тууралуу",
    faq: "FAQ",
    contacts: "Байланыш",
  },
  en: {
    home: "Home",
    about: "About",
    faq: "FAQ",
    contacts: "Contacts",
  },
};

const Navbar = () => {
  const { selectedLanguage, changeLanguage } = useLanguage(); // Получение значения и функции из контекста
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);
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
    } else {
      console.log("Element not found");
    }
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageMenuAnchor(null);
  };

  const handleLanguageChange = (lng) => {
    changeLanguage(lng); // Обновление языка через контекст
    handleLanguageMenuClose();
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false); // Закрытие бокового меню и снятие скролла с контейнера
  };

  // Обработчик нажатия на кнопку прокрутки к разделу
  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    handleCloseDrawer(); // Закрытие бокового меню после нажатия на кнопку (если открыто)
  };

  return (
    <Box position="fixed" width="100%">
      <nav className="navbar">
        <div className="navbar__brand">INTERMARKETING</div>
        <Box
          className="language__selector"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <IconButton
            aria-label="language"
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleLanguageMenuOpen}
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            id="language-menu"
            anchorEl={languageMenuAnchor}
            keepMounted
            open={Boolean(languageMenuAnchor)}
            onClose={handleLanguageMenuClose}
          >
            {Object.keys(languages).map((lng) => (
              <MenuItem key={lng} onClick={() => handleLanguageChange(lng)}>
                {lng.toUpperCase()}
              </MenuItem>
            ))}
          </Menu>
        </Box>
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
              onClose={toggleDrawer} // Используем toggleDrawer здесь
              sx={{ color: "white" }}
            >
              <List>
                {Object.keys(languages[selectedLanguage]).map((key) => (
                  <ListItemButton
                    key={key}
                    onClick={() => scrollToSection(key)}
                    color="white !important"
                  >
                    <ListItemText
                      primary={languages[selectedLanguage][key]}
                      sx={{ color: "white !important" }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <ul className="navbar__links">
              {Object.keys(languages[selectedLanguage]).map((key) => (
                <li key={key}>
                  <Button onClick={() => scrollToSection(key)}>
                    {languages[selectedLanguage][key]}
                  </Button>
                </li>
              ))}
            </ul>
          </>
        )}
      </nav>
    </Box>
  );
};

export default Navbar;
