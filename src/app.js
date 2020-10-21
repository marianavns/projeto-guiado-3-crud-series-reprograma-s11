// Importando os módulos
const express = require('express')
const app = express()

// Usando módulos importados
app.use(express.json())

// Importando as rotas
const index = require('./routes/index')
const routes = require('./routes/seriesRoutes')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Request-with, Content-Type, Accept'
    )
    next()
})

// Definindo as rotas
app.use('/', index)
app.use('/series', routes)

// Disponibilizando o arquivo
module.exports = app