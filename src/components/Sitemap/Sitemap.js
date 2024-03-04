// components/Sitemap.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sitemap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Выполнить редирект на файл sitemap.xml
    navigate("/sitemap.xml");
  }, [navigate]);
  return null;
};

export default Sitemap;
