'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store_Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Store_Account.hasMany(models.Store)
    }
  }
  Store_Account.init({
    account_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store_Account',
  });
  return Store_Account;
};