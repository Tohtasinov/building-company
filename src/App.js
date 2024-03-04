import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import "./globalStyles.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { LanguageProvider } from "./LanguageContext";
import Sitemap from "./components/Sitemap/Sitemap";

function App() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/sitemap.xml" element={<Sitemap />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

App.propTypes = {};

export default App;
