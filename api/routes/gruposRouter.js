const {Router} = require('express')
const GruposController = require('../Controller/GruposController')

const router = Router()

router
    .get('/grupos', GruposController.todosGrupos)
    .get('/grupos/:id', GruposController.umGrupo)
    .post('/grupos', GruposController.criarGrupo)
    .patch('/grupos/:id', GruposController.editarGrupo)
    .delete('/grupos/:id', GruposController.excluirGrupo)

module.exports = router