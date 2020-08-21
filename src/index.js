const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const buildResponse = (req, error = null) => {
    const responseData = {
        data: req.body,
        headers: req.headers
    };
    
    return error ? 
        {
            ...responseData,
            error
        } : responseData;
}

app.get('/', (req, res) => {
    res.send('Server running!');
});

app.post('/ok', (req, res) => {
    const response = buildResponse(req);

    return res.send(response);
});

app.post('/not-modified', (req, res) => {
    return res.status(304).send();
});

app.post('/bad-request', (req, res) => {
    const response = buildResponse(
        req, { message: 'Bad request' }
    );
    
    return res.status(400).send(response);
});

app.post('/internal-server-error', (req, res) => {
    const response = buildResponse(
        req, { message: 'Internal server error' }
    );
    
    return res.status(500).send(response);
});

app.listen(3000, '0.0.0.0');