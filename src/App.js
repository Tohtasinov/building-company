import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

App.propTypes = {};

export default App;
