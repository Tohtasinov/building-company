import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Support from "./components/Support/Support";
import Appartments from "./components/Appartments/Appartments";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <Box>
      <Header />
      <Appartments />
      <Support />
      <Contacts />
      <Footer />
    </Box>
  );
}

App.propTypes = {};

export default App;
