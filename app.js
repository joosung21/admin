var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
app.use('/images/', express.static('assets/images'))
app.use('/node_modules/', express.static('node_modules'))



// Root
app.get('/', function (req, res){res.redirect('/sales')})

// Login
app.get('/login', function (req, res){res.render('login')})

//--------------- Tport Admin --------------//

// 판매내역
app.get('/sales', function (req, res){
  res.render('sales', {page_name: 'sales'})
})

// 리포트
app.get('/report', function (req, res){
  res.render('report', {page_name: 'report'})
})

// 공급사 정산
app.get('/payment/vendor', function (req, res){
  res.render('payment-vendor', {page_name: 'payment-vendor'})
})

// 숙소 정산
app.get('/payment/seller', function (req, res){
  res.render('payment-seller', {page_name: 'payment-seller'})
})

// 공급사 관리
app.get('/tport/vendors', function (req, res){
  res.render('tport-vendors', {page_name: 'tport-vendors'})
})

// 공급사 추가/수정
app.get('/tport/vendors/edit', function (req, res){
  res.render('tport-vendors-edit', {page_name: 'tport-vendors'})
})

// 판매사 관리
app.get('/tport/channels', function (req, res){
  res.render('tport-channels', {page_name: 'tport-channels'})
})

// 판매사 추가/수정
app.get('/tport/channels/edit', function (req, res){
  res.render('tport-channels-edit', {page_name: 'tport-channels'})
})

// 숙소관리
app.get('/tport/sellers', function (req, res){
  res.render('tport-sellers', {page_name: 'tport-sellers'})
})

// 계정관리
app.get('/tport/users', function (req, res){
  res.render('tport-users', {page_name: 'tport-users'})
})




//--------------- GDS Review --------------//

// GDS Root
app.get('/gds', function (req, res){res.redirect('/gds/property')})

// 업체 정보
app.get('/gds/property', function (req, res){
  res.render('gds-property', {page_name: 'property'})
})

// 실시간 예약 정책
app.get('/gds/policy', function (req, res){
  res.render('gds-policy', {page_name: 'policy'})
})

// 객실타입
app.get('/gds/roomtypes', function (req, res){
  res.render('gds-roomtypes', {page_name: 'roomtypes'})
})

// 요금표 달력
app.get('/gds/calendar', function (req, res){
  res.render('gds-calendar', {page_name: 'calendar'})
})

// 정산정보
app.get('/gds/information', function (req, res){
  res.render('gds-information', {page_name: 'information'})
})





// Error Page
app.get('*', function (req, res){res.render('404')})

app.listen(3500, function () {
  console.log('App listening on port 3500!')
})