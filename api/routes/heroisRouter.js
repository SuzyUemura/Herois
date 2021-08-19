const HeroisController = require('../Controller/HeroisController')
const {Router} = require('express')
const router = Router()

router
    .get('/herois', HeroisController.todosHerois)
    .get('/herois/:id', HeroisController.heroiId)
    .post('/herois', HeroisController.criarHeroi)
    .patch('/herois/:id', HeroisController.editarHerois)
    .delete('/herois/:id', HeroisController.excluirHeroi)
module.exports = router