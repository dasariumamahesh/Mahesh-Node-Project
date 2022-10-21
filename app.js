const express = require('express')
const httpContext = require('express-http-context')

const routes = require('./src/routes/v1/routes')

const app = express()


app.use('/', routes)

module.exports = app;