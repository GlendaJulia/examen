var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hola mundo! en Express :)')
})

app.post('/', function (req, res) {
    res.send('Llamada POST misma url')
})

app.put('/', function (req, res) {
    res.send('Recibimos un PUT en /user')
})

app.delete('/', function (req, res) {
    res.send('Recibimos un DELETE en /user')
})

app.listen(3000, function () {
    console.log('Aplicacion de ejemplo escuchando en el puerto 3000!');
});