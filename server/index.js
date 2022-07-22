const express = require('express');
// import bodyParser from 'body-parser';
const morgan = require('morgan');

const app = express();
const PORT = 3000;


app.use(morgan('combined'));
// app.use(bodyParser.json());

app.get('/test', (req, res) =>{
    return res.send('Hello chicken!')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));