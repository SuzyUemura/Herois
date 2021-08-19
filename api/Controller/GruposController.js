dataBase = require('../models')

class GruposController {
    static async todosGrupos (req, res) {
        try {
            const todosHerois = await dataBase.Grupos.findAll()
            res.status(200).json(todosHerois)
        } catch (error) {
            res.status(404).json({mensagem: 'Nenhum Grupo encontrado'})
        }
    }

    static async umGrupo (req, res) {
        const{id} = req.params
        try {
            const grupo = await dataBase.Grupos.findOne({where: {id: Number(id)}})
            res.status(200).json(grupo)
        } catch (error) {
            res.status(404).json({mensagem: 'Grupo não encontrado'})
        }
    }

    static async criarGrupo (req, res) {
        const novoGrupo = req.body
        try {
            const grupoCriado = await dataBase.Grupos.create(novoGrupo)
            res.status(200).json(grupoCriado)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    static async editarGrupo (req, res) {
        const {id} = req.params
        const grupoEditado = req.body
        try {
            await dataBase.Grupos.update(grupoEditado, {where: {id: Number(id)}})
            res.status(204).end()
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    static async excluirGrupo (req, res) {
        const {id} = req.params
        try {
            await dataBase.Grupos.destroy({where: {id: Number(id)}})
            res.status(204).end()
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}

module.exports = GruposController