const FichaController = require('../Controller/FichaController')
const {Router} = require('express')
const router = Router ()

router.post('/fichas', FichaController.clicksing)

module.exports = router
