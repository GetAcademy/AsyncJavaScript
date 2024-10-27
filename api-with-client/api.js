const express = require('express');
const axios = require('axios');
const app = express();

const delayedUrl = 'https://httpbin.org/delay/3';

app.get('/sync-read', (req, res) => {
    axios.get(delayedUrl).then(response => {
        res.send({ message: 'Sync call completed', data: response.data });
    }).catch(error => {
        res.status(500).send({ error: 'Error in sync call' });
    });
});
app.get('/async-read', async (req, res) => {
    try {
        const response = await axios.get(delayedUrl); 
        res.send({ message: 'Async call completed', data: response.data });
    } catch (error) {
        res.status(500).send({ error: 'Error in async call' });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
