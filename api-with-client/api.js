const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
const delayedUrl = 'https://httpbin.org/delay/3';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Synkront API-endepunkt (simulert)
  app.get('/sync-read', (req, res) => {
    delay(3000).then(() => {
      res.send({ message: 'Sync call completed' });
    });
  });
  
  // Asynkront API-endepunkt med async/await
  app.get('/async-read', async (req, res) => {
    await delay(3000); // Vent 3 sekunder asynkront
    res.send({ message: 'Async call completed' });
  });
  

// app.get('/sync-read', (req, res) => {
//     axios.get(delayedUrl).then(response => {
//         res.send({ message: 'Sync call completed', data: response.data });
//     }).catch(error => {
//         res.status(500).send({ error: 'Error in sync call' });
//     });
// });
// app.get('/async-read', async (req, res) => {
//     try {
//         const response = await axios.get(delayedUrl); 
//         res.send({ message: 'Async call completed', data: response.data });
//     } catch (error) {
//         res.status(500).send({ error: 'Error in async call' });
//     }
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
