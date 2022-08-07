'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Store.belongsTo(models.Store_Account)
      Store.belongsTo(models.Store_Area)
      Store.hasMany(models.Report_Product)
    }
  }
  Store.init({
    store_name: DataTypes.STRING,
    StoreAccountId: DataTypes.INTEGER,
    StoreAreaId: DataTypes.INTEGER,
    is_active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};