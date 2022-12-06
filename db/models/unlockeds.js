'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unlocked extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Unlocked.belongsTo(models.Device)
      Unlocked.belongsTo(models.Channel)
    }
  }
  Unlocked.init({
    deviceId: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    channelId: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Unlocked',
    tableName: 'Unlockeds',
  });
  return Unlocked;
};