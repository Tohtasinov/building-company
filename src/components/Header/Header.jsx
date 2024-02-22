import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import appartment from "../../assets/Wine_Black_background_Bottle_Stemware_512316_1280x923.jpg";
import Navbar from "../Navbar/Navbar";
import { useLanguage } from "../../LanguageContext"; // Импорт контекста языка

function Header() {
  const { selectedLanguage } = useLanguage(); // Получение текущего выбранного языка
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  const languageTexts = {
    ru: {
      title: "Интермаркетинг -",
      subtitle: "продвижение вашего",
      business: "бизнеса",
    },
    kg: {
      title: "Интермаркетинг -",
      subtitle: "сиздин",
      business: "бизнесинизди жогорулатуу",
    },
    en: {
      title: "Intermarketing -",
      subtitle: "promoting your",
      business: "business",
    },
  };

  const { title, subtitle, business } = languageTexts[selectedLanguage];

  return (
    <Box
      id="Home"
      sx={{
        backgroundImage: `url(${appartment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        margin: "-8px",
        marginBottom: "30px",
        width: "100%",
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isSmallScreen ? "center" : "start",
          height: "80%",
          fontSize: isSmallScreen ? "1.5rem" : "2rem",
          color: "white",
          margin: isSmallScreen ? "0 20px" : "0 50px",
          paddingTop: "50px",
        }}
      >
        <h1>
          {title} <br />
          {subtitle}
          <br /> {business}
        </h1>
      </Box>
    </Box>
  );
}

export default Header;
