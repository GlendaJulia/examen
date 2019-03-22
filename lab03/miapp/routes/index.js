var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    fs.readFile('index.html', function (err, html) {
        var html_string = html.toString();
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(html_string);
        res.end();
    })
});

router.get('/solicitud', function (req, res, next) {
    fs.readFile('solicitud.html', function (err, html) {
        var html_string = html.toString();
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(html_string);
        res.end();
    })
});

router.post('/solicitud', function (req, res, next) {
    res.render('respuesta', {
        title: 'Solicitud enviada, muchas gracias por visitarnos :D'
    });
});

router.get('/galeria', function (req, res, next) {
    fs.readFile('galeria.html', function (err, html) {
        var html_string = html.toString();
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(html_string);
        res.end();
    })
});

module.exports = router;
