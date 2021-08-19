const {Router} = require('express')
const GruposController = require('../Controller/GruposController')

const router = Router()

router
    .get('/Grupos', GruposController.todosGrupos)
    .get('/Grupos/:id', GruposController.umGrupo)
    .post('/Grupos', GruposController.criarGrupo)
    .patch('/Grupos/:id', GruposController.editarGrupo)
    .delete('/Grupos/:id', GruposController.excluirGrupo)

module.exports = router