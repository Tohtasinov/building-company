import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Appartments from "../components/Appartments/Appartments";
import Footer from "../components/Footer/Footer";
import Support from "../components/Support/Support";
import Contacts from "../components/Contacts/Contacts";

const MainLayout = (props) => {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Header />
      <Appartments />
      <Support />
      <Contacts />
      <Footer />
    </Box>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
