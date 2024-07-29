// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.get('/api/launches', async (req, res) => {
    try {
        const response = await axios.post('https://api.spacexdata.com/v5/launches/query', {
            options: {
                limit: 10,
                offset: 0
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Klaida gaunant paleidimo duomenis');
    }
});

app.get('/api/launch/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://api.spacexdata.com/v5/launches/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Klaida gaunant paleidimo duomenis');
    }
});

app.listen(port, () => {
    console.log(`Serveris veikia adresu http://localhost:${port}`);
});
