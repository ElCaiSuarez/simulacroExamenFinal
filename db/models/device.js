'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Device.init({
    identifier: DataTypes.STRING(12),
    allowNull: false
  }, {
    sequelize,
    modelName: 'Device',
    tableName: 'Devices',
  });
  return Device;
};