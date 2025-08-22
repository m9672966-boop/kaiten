app.get('/quotes', (req, res) => {
  res.sendFile(path.join(__dirname, 'quotes.html'));
});
