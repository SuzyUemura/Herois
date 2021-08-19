'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Grupos', [
      {
       nome: 'Vingadores',
       base: 'Columbus Circle - Manhattan',
       website: 'www.vindores.com.br',
       createdAt: new Date(),
			 updatedAt: new Date()
      },
      {
        nome: 'Liga da Justiça',
        base: 'Sala da Justiça - Washington',
        website: 'www.ligadajustica.com.br',
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        nome: 'Jovens Titãs',
        base: 'ilha na baía - Jump City',
        website: 'www.jovemtitas.com.br',
        createdAt: new Date(),
			  updatedAt: new Date()
       }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Grupos', null, {})
  }
};
