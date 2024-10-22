const express = require('express');
const path = require('path');
const app = express();

// Sett opp en statisk mappe for å servere HTML-filer
app.use(express.static(path.join(__dirname, 'public')));

// API-endepunkt som returnerer JSON-data
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// Sett opp porten
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
