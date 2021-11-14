'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sorteado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sorteado.init({
    numero_sorteado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sorteado',
  });
  return Sorteado;
};