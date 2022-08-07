'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store_Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Store_Area.hasMany(models.Store)
    }
  }
  Store_Area.init({
    area_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store_Area',
  });
  return Store_Area;
};