const express = require('express');
const app = express();
require('dotenv').config();

app.get('/test-api', (req, res) => {
    res.status(200).json({message: 'Working !!!'})
});


app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});
