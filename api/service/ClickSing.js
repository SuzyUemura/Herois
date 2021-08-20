const axios = require('axios')

class ClickSing {
    static async uploadDocument(heroi) {
        const body = {
            document: {
                path: `/Fichas/suzy/${heroi.nome}.docx`,
                template: {
                    data: {
                        nomeHeroi: heroi.nome,
                        identidadeSecretaHeroi: heroi.identidadeSecreta,
                        PoderHeroi: heroi.poder,
                        fraquezaHeroi: heroi.fraqueza,
                        nomeGrupo: heroi.Grupo.nome,
                        siteGrupo: heroi.Grupo.website
                    }
                }
            }
          }         
        const url = ' https://sandbox.clicksign.com/api/v1/templates/3c2eaf75-e11a-4e10-a480-9377df332b7e/documents?access_token=4022cf56-74d6-4518-b641-50c1a800ba09'
        const fichaHeroi = await axios.post(url, body) 
        const keyDocument = fichaHeroi.data.document.key
      
        return keyDocument
    }
}

module.exports = ClickSing