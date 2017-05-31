// //Cookie Library
// (function (document, window) {
//     'use strict';

//     // our cookiet object will be here.
//     // ...

//     if (typeof define === 'function' && define.amd) {
//         define([], function () {
//             return cookiet;
//         });
//     } else {
//         window.cookiet = cookiet;
//     }
// }(document, window));

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.cookie('employee', 'Manjuananad Toladinni', {
        maxAge: 1000 * 60 * 15,
        httpOnly: true,
        path: '/lol',
        secure: false,
        httpOnly: true
    });
    res.send('Hellooss');
});

app.get('/lol', (req, res) => {
    console.log(req.cookies);
    res.send('Hellooss.. You are getting cookies.');
});

app.get('/lola', (req, res) => {
    console.log(req.cookies);
    res.send('Hellooss. no cookies for you');
});

app.listen(3000, () => {
    console.log('App has started...');
});