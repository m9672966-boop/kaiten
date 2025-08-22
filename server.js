const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Разрешаем все CORS-запросы
app.use(cors({ origin: '*' }));

// Отдаём файлы из корня проекта
app.use(express.static(path.join(__dirname)));

// Обязательно добавим маршрут на корень, чтобы index.html открывался по умолчанию
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/quotes', (req, res) => {
  res.sendFile(path.join(__dirname, 'quotes.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Addon сервер запущен на http://localhost:${PORT}`);
});
