const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Разрешаем все CORS-запросы
app.use(cors({ origin: '*' }));

// Статические файлы
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Addon сервер запущен на http://localhost:${PORT}`);
});