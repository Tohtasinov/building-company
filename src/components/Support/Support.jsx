import React, { useState } from "react";
import { Button, TextField, Typography, Grid, Box } from "@mui/material";
import background from "../../assets/background.svg";

const Support = (props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <Box
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
              Есть вопросы?
            </Typography>
            <Typography sx={{ textAlign: "center", color: "#666666" }}>
              Напишите нам, и мы свяжемся с вами в течение 24 часов
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item>
              <TextField
                label="Имя"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{ width: 220 }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Номер телефона"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                sx={{ width: 220 }}
              />
            </Grid>
            <Grid container spacing={2} sx={{ marginBottom: 2 }}></Grid>
            <Grid item>
              <Typography sx={{ width: 220, color: "#666666" }}>
                Мы никому не передаем ваши данные.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
                sx={{ width: 220 }}
              >
                Отправить
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Support;
