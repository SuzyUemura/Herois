
class Herois {
    static async todosHerois(req, res) {
        try {
           return []
        } catch (error) {
            return console.log(error.message)
        }
    }
    static async heroiId() {
        try {
            return { 
                id: 500,
                nome: 'Homem chamas',
                poder: 'controle do fogo',
                fraqueza: 'tsunami',
                identidadeSecreta: 'Carl Vigorio',
                grupo_id: 4,
                createdAt: '05/05/2023',
                updatedAt: '05/05/2023',
              }
        } catch (error) {
            return console.log(error.message)
        }
    }
    static async criarHeroi(req, res) {
        try {
            return { 
                id: 500,
                nome: 'Homem chamas',
                poder: 'controle do fogo',
                fraqueza: 'tsunami',
                identidadeSecreta: 'Carl Vigorio',
                grupo_id: 4,
                createdAt: '05/05/2023',
                updatedAt: '05/05/2023',
              }
        } catch (error) {
            return console(error.message)
        }
    }
    static async editarHerois(req, res) {
        try { 
            res.status(204).end()
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    static async excluirHeroi(req, res) {
        try { 
            res.status(204).end()
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}
module.exports = Herois