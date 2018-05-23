var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
app.use('/node_modules/', express.static('node_modules'))

app.get('/', function (req, res){res.render('sales')})
app.get('/sales', function (req, res){res.render('sales')})

// Error Pages
app.get('*', function (req, res){res.render('404')})

app.listen(3500, function () {
  console.log('App listening on port 3500!')
})