import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useLanguage } from "../../LanguageContext"; // Импортируйте ваш контекст языка

const Contacts = (props) => {
  const { selectedLanguage } = useLanguage();

  const languageTexts = {
    en: {
      contacts: "Contacts",
      address: "Address",
      addressText: "123 Main Street, City, Country",
      phone: "Phone",
      workingHours: "Working Hours",
      workingHoursText: "Monday to Friday: 9am - 5pm",
      socialMedia: "Social Media",
    },
    ru: {
      contacts: "Контакты",
      address: "Адрес",
      addressText: "123 ул. Основная, Город, Страна",
      phone: "Телефон",
      workingHours: "Часы работы",
      workingHoursText: "Понедельник - Пятница: с 9:00 до 17:00",
      socialMedia: "Социальные сети",
    },
    kg: {
      contacts: "Байланышуу",
      address: "Дарек",
      addressText: "123 Баш каланын кочосу, Шаар, Өлкө",
      phone: "Телефон",
      workingHours: "Чүйгүн кезиштүү убакыт",
      workingHoursText: "Дүйшөмбү - Жума: саат 9:00 - 17:00",
      socialMedia: "Социалдык медиа",
    },
  };

  return (
    <Box
      id="contacts"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "30px",
        marginBottom: "20px",
        border: "1px solid #ccc",
      }}
    >
      <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "white" }}
        >
          {languageTexts[selectedLanguage].contacts}
        </Typography>
        <Box sx={{ bgcolor: "#f9f9f9", padding: 2, borderRadius: 8 }}>
          <Typography variant="h6">
            {languageTexts[selectedLanguage].address}:
          </Typography>
          <Typography>{languageTexts[selectedLanguage].addressText}</Typography>
        </Box>
        <Box
          sx={{ bgcolor: "#f9f9f9", padding: 2, borderRadius: 8, marginTop: 2 }}
        >
          <Typography variant="h6">
            {languageTexts[selectedLanguage].phone}:
          </Typography>
          <Typography>
            <a href="tel:+78121234567">+996 (555) 67-86-79</a>
          </Typography>
        </Box>
        <Box
          sx={{ bgcolor: "#f9f9f9", padding: 2, borderRadius: 8, marginTop: 2 }}
        >
          <Typography variant="h6">
            {languageTexts[selectedLanguage].workingHours}:
          </Typography>
          <Typography>
            {languageTexts[selectedLanguage].workingHoursText}
          </Typography>
        </Box>
        <Box
          sx={{ bgcolor: "#f9f9f9", padding: 2, borderRadius: 8, marginTop: 2 }}
        >
          <Typography variant="h6">E-mail:</Typography>
          <Typography>
            <a href="mailto:example@gmail.com">example@gmail.com</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

Contacts.propTypes = {};

export default Contacts;
