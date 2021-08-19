'use strict';
const { Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class herois extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      herois.belongsTo(models.Grupos, { foreignKey: "grupo_id"})
    }
  };
  herois.init({
    nome: DataTypes.STRING,
    poder: DataTypes.STRING,
    fraqueza: DataTypes.STRING,
    identidadeSecreta: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'herois',
  })
  return herois;
};