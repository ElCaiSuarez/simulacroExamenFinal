'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Channel.belongsTo(models.Categorie)
      Channel.hasMany(models.Favorite)
      Channel.hasMany(models.Unlocked)
      Channel.hasMany(models.Locked)
    }
  }
  Channel.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logoUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categorieId: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Channel',
    tableName: 'Channels',
  });
  return Channel;
};