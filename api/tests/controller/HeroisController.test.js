jest.mock('../../../api/Controller/HeroisController')
const Heroi = require('../../../api/Controller/HeroisController')
const httpMocks = require('node-mocks-http')

describe('Controller de Herois', () => {
    test('método criarHeroi() retorno do heroi criado', async () => {
        try {
            const novoHeroi = await Heroi.criarHeroi()

            expect(novoHeroi.id).toBe(500)
            expect(novoHeroi.nome).toBe('Homem chamas')
            expect(novoHeroi.poder).toBe('controle do fogo')
            expect(novoHeroi.fraqueza).toBe('tsunami')
            expect(novoHeroi.identidadeSecreta).toBe('Carl Vigorio')
            expect(novoHeroi.grupo_id).toBe(4)
            expect(novoHeroi.createdAt).toBe('05/05/2023')
            expect(novoHeroi.updatedAt).toBe('05/05/2023')
        } catch (error) {
            return console.log(error.message)
        }


    })

    test('método heroiId return heroi completo', async () => {
        try {
            const heroi = await Heroi.heroiId()

            expect(heroi.id).toBe(500)
            expect(heroi.nome).toBe('Homem chamas')
            expect(heroi.poder).toBe('controle do fogo')
            expect(heroi.fraqueza).toBe('tsunami')
            expect(heroi.identidadeSecreta).toBe('Carl Vigorio')
            expect(heroi.grupo_id).toBe(4)
            expect(heroi.createdAt).toBe('05/05/2023')
            expect(heroi.updatedAt).toBe('05/05/2023')

        } catch (error) {
            return console.log(error.message)
        }

    })

    test('método lista de herois retornar lista vazia', () => {
        try {
            const todosHerois = Heroi.todosHerois()
            return expect(todosHerois).resolves.toStrictEqual([])

        } catch (error) {
            return console.log(error.message)
        }
    })

    test('método editarHeroi retorn status 204', async () => {
        const request = httpMocks.createRequest({
            method: 'PATCH',
            url: '/herois/1'
        })
        const response = httpMocks.createResponse()
        Heroi.editarHerois(request, response).then(r => {expect(r.status).toEqual(204)})
        
    })

    test('método excluirHeroi retorn status 204', async () => {
        const request = httpMocks.createRequest({
            method: 'DELTE',
            url: '/herois/1'
        })
        const response = httpMocks.createResponse()
        Heroi.excluirHeroi(request, response).then(r => {expect(r.status).toEqual(204)})
        
    })
})