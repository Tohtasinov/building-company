import React from "react";
import { Box, Grid } from "@mui/material";

const Footer = () => {
  const pStyles = {
    marginTop: "9px",
    cursor: "pointer",
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        id: "Footer",
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
          marginTop: "20px !important",
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
            order: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: "40px",
            paddingLeft: "20px",
            height: "100%",
          }}
        >
          <Box sx={{ marginBottom: "10px" }}>
            <h1
              style={{
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                textTransform: "uppercase",
                marginTop: "40px",
                marginBottom: "0",
                paddingBottom: "0",
              }}
            >
              INTERMARKETING
            </h1>
            <p style={{ fontSize: "16px", marginTop: "8px" }}>
              Ведущая строительная компания, приверженная высоким стандартам
              качества, профессионализму и надежности в реализации жилых,
              коммерческих и промышленных проектов.
            </p>
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          sx={{
            order: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            paddingBottom: "90px",
            paddingLeft: "20px",
            height: "100%",
            alignItems: "start",
            textTransform: "uppercase",
          }}
        >
          <p style={pStyles} onClick={() => scrollToSection("Home")}>
            Home
          </p>
          <p style={pStyles} onClick={() => scrollToSection("About")}>
            About Us
          </p>
          <p style={pStyles} onClick={() => scrollToSection("Appartments")}>
            Appartments
          </p>
          <p style={pStyles} onClick={() => scrollToSection("Contacts")}>
            Contacts
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            order: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "0px",
            height: "100%",
            marginTop: "10px !important",
          }}
        >
          <Box display={"flex"} textAlign={"center"} marginTop="9px">
            <p
              style={{
                marginLeft: "20px",
                marginTop: "3px",
                cursor: "pointer",
              }}
              onClick={() =>
                (window.location.href = "mailto:example@gmail.com")
              }
            >
              example@gmail.com
            </p>
          </Box>

          <Box display={"flex"} textAlign={"center"} marginTop="3px">
            <Box>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
                onClick={() => (window.location.href = "tel:+996555678679")}
              >
                +996555678679
              </p>
            </Box>
          </Box>

          <Box display={"flex"} textAlign={"center"} marginTop="3px">
            <Box>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
              >
                Ул. Суванбердиева 108
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
