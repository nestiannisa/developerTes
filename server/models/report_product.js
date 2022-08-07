'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Report_Product.belongsTo(models.Product)
      Report_Product.belongsTo(models.Store)
    }
  }
  Report_Product.init({
    StoreId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    compliance: DataTypes.INTEGER,
    tanggal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Report_Product',
  });
  return Report_Product;
};