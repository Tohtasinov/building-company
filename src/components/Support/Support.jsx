import React, { useState } from "react";
import { Button, TextField, Typography, Grid, Box } from "@mui/material";
import background from "../../assets/background.svg";
import { useLanguage } from "../../LanguageContext"; // Импорт контекста языка

const Support = (props) => {
  const { selectedLanguage } = useLanguage(); // Получение текущего выбранного языка
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phoneNumber", phoneNumber);

    try {
      const response = await fetch("https://formspree.io/f/xoqgdqpb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        // Очистите состояние формы после успешной отправки
        setName("");
        setPhoneNumber("");
      } else {
        console.error("Form submission failed!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const languageTexts = {
    ru: {
      title: "Есть вопросы?",
      subtitle: "Напишите нам, и мы свяжемся с вами в течение 24 часов",
      name: "Имя",
      phoneNumber: "Номер телефона",
      privacyNote: "Мы никому не передаем ваши данные.",
      submitButton: "Отправить",
    },
    kg: {
      title: "Суроолоруңуз бар бы?",
      subtitle: "Бизге жазыңыз, биз сиз менен 24 саат ичинде байланышатабыз",
      name: "Аты",
      phoneNumber: "Телефон номери",
      privacyNote: "Биз эчкимге сиздин маалыматтарыңызды бербейбиз.",
      submitButton: "Жөнөтүү",
    },
    en: {
      title: "Have Questions?",
      subtitle: "Write to us and we'll get back to you within 24 hours",
      name: "Name",
      phoneNumber: "Phone Number",
      privacyNote: "We don't share your information with anyone.",
      submitButton: "Submit",
    },
  };

  const { title, subtitle, nameText, phoneNumber1, privacyNote, submitButton } =
    languageTexts[selectedLanguage];

  return (
    <Box
      id="FAQ"
      sx={{
        margin: "auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 8,
        boxShadow: 2,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          maxWidth: 460,
          margin: "auto",
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 8,
          boxShadow: 2,
          backgroundColor: "#ffffff",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                marginBottom: 2,
                textAlign: "center",
                color: "#333333",
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ textAlign: "center", color: "#666666" }}>
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item>
              <TextField
                label={nameText}
                variant="outlined"
                value={nameText}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{ width: 220 }}
              />
            </Grid>
            <Grid item>
              <TextField
                label={phoneNumber1}
                variant="outlined"
                value={phoneNumber1}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                sx={{ width: 220 }}
              />
            </Grid>
            <Grid container spacing={2} sx={{ marginBottom: 2 }}>
              <Grid item>
                <Typography
                  sx={{ width: 220, color: "#666666", marginLeft: "20px" }}
                >
                  {privacyNote}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
                sx={{ width: 220 }}
              >
                {submitButton}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Support;
