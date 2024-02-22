import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import appartment from "../../assets/квартира.jpg";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto23.jpg";
import foto3 from "../../assets/foto11.jpg";

const Appartments = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  return (
    <Box
      id="About"
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
          Наши услуги
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
          <Box width={isSmallScreen ? "100%" : "40%"}>
            <img
              src={foto1}
              alt="Apartment 1"
              style={{ width: "100%", height: "380px", borderRadius: "10px" }}
            />
            <Typography>Оптовая продажа алкогольной продукции</Typography>
          </Box>
          <Box width={isSmallScreen ? "100%" : "40%"}>
            <img
              src={foto2}
              alt="Apartment 2"
              style={{ width: "100%", height: "380px", borderRadius: "10px" }}
            />
            <Typography>Предоставление услуг по созданию дизайна</Typography>
          </Box>
          <Box width={isSmallScreen ? "100%" : "40%"}>
            <img
              src={foto3}
              alt="Apartment 3"
              style={{ width: "100%", height: "380px", borderRadius: "10px" }}
            />
            <Typography>
              Маркетинговой стратегии продвижение алкогольной продукции{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Appartments.propTypes = {};

export default Appartments;
