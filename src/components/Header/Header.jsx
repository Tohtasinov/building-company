import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import appartment from "../../assets/Wine_Black_background_Bottle_Stemware_512316_1280x923.jpg";
import Navbar from "../Navbar/Navbar";

function Header() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

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
          Intermarketing - <br />
          продвижение вашего
          <br /> бизнеса
        </h1>
      </Box>
    </Box>
  );
}

export default Header;
