const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Разрешаем все CORS-запросы (для интеграции с Kaiten и др.)
app.use(cors({ origin: '*' }));

// Отдаём статические файлы из корня проекта
app.use(express.static(path.join(__dirname)));

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Страница цитат
app.get('/quotes', (req, res) => {
  res.sendFile(path.join(__dirname, 'quotes.html'));
});

// Пример API-маршрута (если понадобится)
app.get('/api/test', (req, res) => {
  res.json({ message: 'Сервер работает!' });
});

// Обработка 404
app.get('*', (req, res) => {
  res.status(404).send('Страница не найдена');
});

// Порт: Render использует переменную PORT, локально — 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Addon сервер запущен на порту ${PORT}`);
});
