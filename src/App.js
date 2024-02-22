import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import "./globalStyles.css";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

App.propTypes = {};

export default App;
