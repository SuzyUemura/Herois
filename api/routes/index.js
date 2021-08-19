const bodyParser = require('body-parser')
const heroisRouter = require('./heroisRouter')
const gruposRouter = require('./gruposRouter')

module.exports = app => {
    app.use(bodyParser.json(),
            heroisRouter,
            gruposRouter)
}