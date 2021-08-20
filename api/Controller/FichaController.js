const database = require('../models')
const ClickSing = require('../service/ClickSing')

class FichaController {
    static async clicksing(req, res) {
        try {
            const id = req.body.id
            const heroi = await database.herois.findOne({ 
                where: {id},
                include: [database.Grupos]
            })    
            const keyDocument = await ClickSing.uploadDocument(heroi)
            res.status(200).json({mensagem: `Ficha do heroi ${heroi.nome} enviada à click sing. Chave do documento: ${keyDocument}`})
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}

module.exports = FichaController