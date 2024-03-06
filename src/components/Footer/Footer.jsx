import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useLanguage } from "../../LanguageContext"; // Импортируйте ваш контекст языка

const Footer = () => {
  const { selectedLanguage } = useLanguage();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  const languageTexts = {
    en: {
      home: "Home",
      about: "About Us",
      contacts: "Contacts",
      title: "INTERMARKETING",
      description:
        "Helps alcohol brands successfully bring their products to market. We specialize in design and marketing strategies, delivering outstanding results for our clients.",
      email: "example@gmail.com",
      phoneNumber: "+996555678679",
      address: "Ул. Суванбердиева 108",
      faq: "FAQ",
    },
    ru: {
      home: "Главная",
      about: "О нас",
      contacts: "Контакты",
      title: "ИНТЕРМАРКЕТИНГ",
      description:
        "Помогает алкогольным брендам успешно вывести свои продукты на рынок. Мы специализируемся на создании дизайна и маркетинговых стратегий, обеспечивая выдающиеся результаты для наших клиентов.",
      email: "example@gmail.com",
      phoneNumber: "+996555678679",
      address: "Ул. Суванбердиева 108",
      faq: "FAQ",
    },
    kg: {
      home: "Башкы бет",
      about: "Биз жөнүндө",
      contacts: "Байланышуу",
      title: "ИНТЕРМАРКЕТИНГ",
      description:
        "Алкоголдук бренддердин өздөрүнүн маалыматтарын сыяктуу акча болжолдоо. Биз дизайн менен маркетинг стратегияларын жасоо мамлекеттик максаттарды түзөтүп, алардын мүмкүнчүлүктөрү үчүн асык жүзгө келген натыйжа алабыз.",
      email: "example@gmail.com",
      phoneNumber: "+996555678679",
      address: "Ул. Суванбердиева 108",
      faq: "FAQ",
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const {
    title,
    description,
    email,
    phoneNumber,
    address,
    home,
    about,
    contacts,
    faq,
  } = languageTexts[selectedLanguage];

  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderRadius: "50px 50px 0 0",
        marginLeft: "-8px",
        marginRight: "-8px",
        border: "1px solid #ccc",
        width: "100%",
        paddingBottom: isSmallScreen ? "50px" : "20px",
      }}
    >
      <Grid
        container
        justifyContent="center"
        sx={{
          height: "360px",
          marginTop: "20px",
          color: "white",
          pl: "20px",
          fontFamily: "Geologica",
          display: "flex",
          "@media (max-width: 450px)": {
            flexDirection: "column",
            height: "auto",
            maxWidth: "100%",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "20px",
            height: "100%",
            marginTop: "10px",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: isSmallScreen ? "20px" : "150px",
            height: "100%",
            marginTop: "10px",
            "& p": {
              marginTop: "9px",
              cursor: "pointer",
            },
          }}
        >
          <Typography variant="body1" onClick={() => scrollToSection("home")}>
            {home}
          </Typography>
          <Typography variant="body1" onClick={() => scrollToSection("about")}>
            {about}
          </Typography>
          <Typography variant="body1" onClick={() => scrollToSection("faq")}>
            {faq}
          </Typography>
          <Typography
            variant="body1"
            onClick={() => scrollToSection("contacts")}
          >
            {contacts}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            marginTop: "10px",
          }}
        >
          <Box display="flex" textAlign="center" marginTop="9px">
            <Typography
              variant="body1"
              sx={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={() => (window.location.href = `mailto:${email}`)}
            >
              {email}
            </Typography>
          </Box>
          <Box display="flex" textAlign="center" marginTop="3px">
            <Typography
              variant="body1"
              sx={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={() => (window.location.href = `tel:${phoneNumber}`)}
            >
              {phoneNumber}
            </Typography>
          </Box>
          <Box display="flex" textAlign="center" marginTop="3px">
            <Typography variant="body1" sx={{ marginLeft: "20px" }}>
              {address}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
