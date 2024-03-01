const express = require("express");
const path = require("path");
const app = express();

// Указываем директорию, где находится index.html
app.use(express.static(path.join(__dirname, "public")));

// Отправляем index.html при обращении к корневому URL
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Слушаем порт 9000
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
