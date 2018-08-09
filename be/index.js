const express = require('express')
const port = parseInt(process.env.BE_PORT, 10) || 5000
const Routes = require('./routes')
const ExceptionHandler = require('./helpers/exception')
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', ['http://localhost:3000']);
  return next()
})

Routes(app)

ExceptionHandler(app)

app.listen(port, (err) => {
  if (err) throw err
  console.log(`> Back End Ready on http://localhost:${port}`)
})

module.exports = app