const express = require('express'),
    app = express(),
    port = process.env.PORt || 3000;

app.get('/', (req, res) => {
    // res.setHeader('location', 'http://www.google.co.in');
    res.status(405).send('Manjuanand Toladinni');
});

app.listen(3000, () => {
    console.log('App has started..');
});