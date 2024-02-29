const express = require("express");
const path = require("path");

const app = express();

// Определяем папку, где находится ваше React-приложение
const staticFilesPath = path.join(__dirname, "build");

// Отдаем статические файлы из папки build
app.use(express.static(staticFilesPath));

// Обработка всех запросов, кроме API запросов
app.get("*", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "index.html"));
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
