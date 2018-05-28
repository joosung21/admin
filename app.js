var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
app.use('/images/', express.static('assets/images'))
app.use('/node_modules/', express.static('node_modules'))

app.get('/', function (req, res){res.redirect('sales')})

// 판매내역
app.get('/sales', function (req, res){
  res.render('sales', {page_name: 'sales'})
})

// 리포트
app.get('/report', function (req, res){
  res.render('report', {page_name: 'report'})
})

// 숙소정산
app.get('/payment/seller', function (req, res){
  res.render('payment-seller', {page_name: 'payment-seller'})
})

// 숙소관리
app.get('/tport/sellers', function (req, res){
  res.render('tport-sellers', {page_name: 'tport-sellers'})
})

// Error Page
app.get('*', function (req, res){res.render('404')})

app.listen(3500, function () {
  console.log('App listening on port 3500!')
})