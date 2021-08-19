'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('herois', [
      {
        nome: 'Homem de Ferro',
        poder: 'armadura motorizado',
        fraqueza: 'alcoolismo',
        identidadeSecreta: 'Tony Stark',
        grupo_id: 1,
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        nome: 'Homem de Aranha',
        poder: 'força sobre-humana, fixar-se a paredes e tetos, sentido aranha',
        fraqueza: 'agua',
        identidadeSecreta: 'Peter Parker',
        grupo_id: 1,
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        nome: 'Thor',
        poder: 'martelo Mjolnir, voar, força descomunal',
        fraqueza: 'vulnerável sempre que ele é separado de Mjolnir',
        identidadeSecreta: 'Tony Stark',
        grupo_id: 1,
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        nome: 'Batman',
        poder: 'não possui',
        fraqueza: 'ataques mentais',
        identidadeSecreta: 'Bruce Wayne',
        grupo_id: 2,
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        nome: 'Mulher Maravilha',
        poder: 'Super-força, Invulnerabilidade, Fator de Cura',
        fraqueza: 'amarrada pelo homem',
        identidadeSecreta: 'Diana Prince',
        grupo_id: 2,
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        nome: 'Super Homem',
        poder: 'força descomunal, visão de raio-x, visão de calor, supersopro',
        fraqueza: 'kryptonita',
        identidadeSecreta: 'Clark Kent',
        grupo_id: 2,
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        nome: 'Estrelar',
        poder: 'Projeção de energia ultravioleta, Força sobre-humana',
        fraqueza: 'cromo metálico',
        identidadeSecreta: '-',
        grupo_id: 3,
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        nome: 'Mutano',
        poder: 'tranforma em animais',
        fraqueza: 'inconciente não conseque se transformar',
        identidadeSecreta: '-',
        grupo_id: 3,
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        nome: 'Ravena',
        poder: 'explosões de energia escura pelas mãos, se teleportar',
        fraqueza: 'raiva aflorar',
        identidadeSecreta: '-',
        grupo_id: 3,
        createdAt: new Date(),
			  updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('herois', null, {})
  }
};
