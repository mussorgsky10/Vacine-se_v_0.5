'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Use extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Use.init({
    userId: DataTypes.STRING,
    nome: DataTypes.STRING,
    cracha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Use',
  });
  return Use;
};