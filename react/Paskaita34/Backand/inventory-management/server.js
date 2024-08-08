const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/items');

const app = express();

mongoose.connect('mongodb://localhost/inventory', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use('/items', items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
