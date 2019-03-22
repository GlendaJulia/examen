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

router.post('/', function (req, res, next) {
    fs.readFile('./index.html', function (err, html) {
        var html_string = html.toString();
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(html_string);
        res.end();
    })
});

module.exports = router;
