const express = require('express');
const path = require('path');
const app = express();
const filePath = 'bigfile.txt';

app.use(express.static(path.join(__dirname, 'public')));
app.get('/sync-read', (req, res) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        res.send({ message: 'File read synchronously', length: data.length });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error reading file synchronously' });
    }
});
app.get('/async-read', async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        res.send({ message: 'File read asynchronously (await)', length: data.length });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error reading file asynchronously' });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
