import { Box } from "@mui/material";
import React from "react";
import appartment from "../../assets/apartment.jpg";
import Navbar from "../Navbar/Navbar";

function Header() {
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
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "80%",
          fontSize: "2rem",
          color: "white",
        }}
      >
        <h1>
          Жилой комплекс <br />в центре города
        </h1>
      </Box>
    </Box>
  );
}

export default Header;
