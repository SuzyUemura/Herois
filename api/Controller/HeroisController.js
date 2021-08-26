const dataBase = require('../models')

class Herois {
    static async todosHerois(req, res) {
        try {
            const herois = await dataBase.herois.findAll()
           return res.status(200).json(herois)
        } catch (error) {
           return res.status(404).json({mensagem: 'Nenhum héroi foi encontrado'})
        }
    }
    static async heroiId(req, res) {
        const {id} = req.params
        try {
            const heroiEncontrado = await dataBase.herois.findOne({where: {id: Number(id)}})
            return res.status(200).json(heroiEncontrado)
        } catch (error) {
            return res.status(404).json({mensagem: 'Heroi não encontrado'})
        }
    }
    static async criarHeroi(req, res) {
        const novoHeroi = req.body
        try {
            const heroiCriado = await dataBase.herois.create(novoHeroi)
            return res.status(201).json(heroiCriado)
            
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    static async editarHerois(req, res) {
        const {id} = req.params
        const heroiEditado = req.body
        try {
            await dataBase.herois.update(heroiEditado, {where: {id: Number(id)}})
            return res.status(204).end()
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async excluirHeroi(req, res) {
        const {id} = req.params
        try { 
            await dataBase.herois.destroy({where: {id: Number(id)}})
            res.status(204).end()
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}

module.exports = Herois