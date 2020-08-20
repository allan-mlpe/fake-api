const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server running!');
});

app.post('/ok', (req, res) => {
    const data = req.body;
    const headers = req.headers;

    return res.send({ data, headers });
});

app.post('/not-modified', (req, res) => {
    return res.status(304).send();
});

app.post('/bad-request', (req, res) => {
    const data = req.body;
    const headers = req.headers;
    const error = {
        message: 'Bad request'
    };
    
    return res.status(400).send({ data, headers, error });
});

app.post('/internal-server-error', (req, res) => {
    const data = req.body;
    const headers = req.headers;
    const error = {
        message: 'Internal server error'
    };
    
    return res.status(500).send({ data, headers, error });
});

app.listen(3000, '0.0.0.0');