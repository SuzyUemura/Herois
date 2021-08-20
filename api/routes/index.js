const bodyParser = require('body-parser')
const heroisRouter = require('./heroisRouter')
const gruposRouter = require('./gruposRouter')
const fichaRouter = require('./fichaRouter')

module.exports = app => {
    app.use(bodyParser.json(),
            heroisRouter,
            gruposRouter,
            fichaRouter)
}