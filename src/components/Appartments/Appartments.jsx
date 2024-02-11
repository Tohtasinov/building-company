import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box } from "@mui/material";
import appartment from "../../assets/квартира.jpg";

const Appartments = (props) => {
  return (
    <Box
      id="Appartments"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "30px",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          margin: "auto",
          padding: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: 3, color: "white" }}
        >
          Наши квартиры
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img
              src={appartment}
              alt="Apartment 1"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={appartment}
              alt="Apartment 2"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={appartment}
              alt="Apartment 3"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={appartment}
              alt="Apartment 4"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

Appartments.propTypes = {};

export default Appartments;
