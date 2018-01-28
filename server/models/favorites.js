'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    order: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  return Favorites;
};