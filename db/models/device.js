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
      Device.hasMany(models.Favorite)
      Device.hasMany(models.Unlocked)
      Device.hasMany(models.Locked)
    }
  }
  Device.init({
    identifier: { 
      type: DataTypes.STRING(12),
      allowNull: false
    },
    enabledAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    disabledAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Device',
    tableName: 'Devices',
  });
  return Device;
};