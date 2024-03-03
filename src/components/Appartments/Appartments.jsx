import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import appartment from "../../assets/квартира.jpg";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/bran1590644249.jpg";
import foto3 from "../../assets/tequila-bottles-on-a-black-background-magic-drink_951308-93.jpg";
import { useLanguage } from "../../LanguageContext"; // Импорт контекста языка

const Appartments = (props) => {
  const { selectedLanguage } = useLanguage(); // Получение текущего выбранного языка
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  const languageTexts = {
    ru: {
      title: "Наши услуги",
      services: [
        "Оптовая продажа алкогольной продукции",
        "Предоставление услуг по созданию дизайна",
        "Маркетинговой стратегии продвижение алкогольной продукции",
      ],
    },
    kg: {
      title: "Биздин кызматтар",
      services: [
        "Алкогольдук продукциянын оптовый сатуу",
        "Дизайнды жасоо боюнча кызматтарды көрсөтүү",
        "Алкогольдук продукциянын көчүрүү менен маркетинг стратегиясы",
      ],
    },
    en: {
      title: "Our Services",
      services: [
        "Wholesale alcohol product sales",
        "Providing services for design creation",
        "Marketing strategy for promoting alcoholic beverages",
      ],
    },
  };

  const { title, services } = languageTexts[selectedLanguage];

  return (
    <Box
      id="about"
      sx={{
        borderRadius: "30px",
        marginBottom: "20px",
        border: "1px solid #ccc",
      }}
    >
      <Box
        sx={{
          padding: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: 3, color: "white" }}
        >
          {title}
        </Typography>
        <Box
          container
          spacing={5}
          display={"flex"}
          flexDirection={isSmallScreen ? "column" : "row"}
          justifyContent={"space-around"}
          gap={3}
          color={"white"}
          textAlign={"center"}
        >
          {services.map((service, index) => (
            <Box key={index} width={isSmallScreen ? "100%" : "40%"}>
              <img
                src={index === 0 ? foto1 : index === 1 ? foto2 : foto3}
                alt={`Service ${index + 1}`}
                style={{
                  width: "100%",
                  height: isSmallScreen ? "100%" : "380px",
                  borderRadius: "10px",
                }}
              />
              <Typography>{service}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

Appartments.propTypes = {};

export default Appartments;
