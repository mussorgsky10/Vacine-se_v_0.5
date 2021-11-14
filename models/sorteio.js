'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sorteio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sorteio.belongsTo(models.Recompensa);
    }
  };
  Sorteio.init({
    cracha_sorteado: DataTypes.STRING,
    itemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sorteio',
  });
  return Sorteio;
};