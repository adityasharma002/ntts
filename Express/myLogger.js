var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('BEFORE LOGGED')
  next()
  console.log('AFTER LOGGED')
}

app.use(myLogger)

app.get('/', function (req, res) {
  console.log('Hello world')
  res.send('Hello World!')
})

app.listen(3000)


// var express = require('express')
// var app = express()

// var myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }
// app.get('/', function (req, res, next) {
//   console.log('Hello world')
//   res.send('Hello World!')
//   next()
// })

// app.use(myLogger)

// app.listen(3000)