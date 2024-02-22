import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, WhatsApp } from "@mui/icons-material";

const Contacts = (props) => {
  return (
    <Box
      id="Contacts"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "30px",
        marginBottom: "20px",
        border: "1px solid #ccc",
      }}
    >
      <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "white" }}
        >
          Контакты
        </Typography>
        <Box sx={{ bgcolor: "#f9f9f9", padding: 2, borderRadius: 8 }}>
          <Typography variant="h6">Адрес:</Typography>
          <Typography>Ул. Суванбердиева 108 г. Бишкек, Кыргызстан</Typography>
        </Box>
        <Box
          sx={{ bgcolor: "#f9f9f9", padding: 2, borderRadius: 8, marginTop: 2 }}
        >
          <Typography variant="h6">Телефон:</Typography>
          <Typography>
            <a href="tel:+78121234567">+996 (555) 67-86-79</a>
          </Typography>
        </Box>
        <Box
          sx={{ bgcolor: "#f9f9f9", padding: 2, borderRadius: 8, marginTop: 2 }}
        >
          <Typography variant="h6">Время работы:</Typography>
          <Typography>Пн-Пт: 10:00 - 20:00</Typography>
        </Box>
        <Box
          sx={{ bgcolor: "#f9f9f9", padding: 2, borderRadius: 8, marginTop: 2 }}
        >
          <Typography variant="h6">E-mail:</Typography>
          <Typography>
            <a href="mailto:example@gmail.com">example@gmail.com</a>
          </Typography>
        </Box>
        <Box
          sx={{ bgcolor: "#f9f9f9", padding: 2, borderRadius: 8, marginTop: 2 }}
        >
          <Typography variant="h6">Социальные сети:</Typography>
          <IconButton href="#">
            <Facebook />
          </IconButton>
          <IconButton href="#">
            <WhatsApp />
          </IconButton>
          <IconButton href="#">
            <Instagram />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

Contacts.propTypes = {};

export default Contacts;
