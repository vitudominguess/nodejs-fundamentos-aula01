var express = require("express")
var app = express()
app.get('view engine', 'ejs')
app.get('views', './app/views')

module.exports = app