'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locked extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Locked.belongsTo(models.Device)
      Locked.belongsTo(models.Channel)
    }
  }
  Locked.init({
    deviceId: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    channelId: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    lockedCode: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Locked',
    tableName: 'Lockeds',
  });
  return Locked;
};