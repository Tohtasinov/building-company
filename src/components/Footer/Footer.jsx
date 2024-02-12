import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="Footer"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "50px 50px 0 0",
        marginLeft: "-8px",
        marginRight: "-8px",
        marginBottom: "10px",
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
          marginBottom: "-20px",
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
            INTERMARKETING
          </Typography>
          <Typography variant="body1">
            Ведущая строительная компания, приверженная высоким стандартам
            качества, профессионализму и надежности в реализации жилых,
            коммерческих и промышленных проектов.
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
            paddingLeft: "20px",
            height: "100%",
            marginTop: "10px",
            "& p": {
              marginTop: "9px",
              cursor: "pointer",
            },
          }}
        >
          <Typography variant="body1" onClick={() => scrollToSection("Home")}>
            Home
          </Typography>
          <Typography variant="body1" onClick={() => scrollToSection("About")}>
            About Us
          </Typography>
          <Typography
            variant="body1"
            onClick={() => scrollToSection("Appartments")}
          >
            Apartments
          </Typography>
          <Typography
            variant="body1"
            onClick={() => scrollToSection("Contacts")}
          >
            Contacts
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
              onClick={() =>
                (window.location.href = "mailto:example@gmail.com")
              }
            >
              example@gmail.com
            </Typography>
          </Box>
          <Box display="flex" textAlign="center" marginTop="3px">
            <Typography
              variant="body1"
              sx={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={() => (window.location.href = "tel:+996555678679")}
            >
              +996555678679
            </Typography>
          </Box>
          <Box display="flex" textAlign="center" marginTop="3px">
            <Typography variant="body1" sx={{ marginLeft: "20px" }}>
              Ул. Суванбердиева 108
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
