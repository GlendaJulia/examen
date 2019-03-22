var express = require('express');
var router = express.Router();

/* GET users listing. */

var fs = require('fs');

router.get('/', function (req, res, next) {
    fs.readFile('galeria.html', function (err, html) {
        var html_string = html.toString();
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(html_string);
        res.end();
    })
});


module.exports = router;
