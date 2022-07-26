const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    type: DataTypes.Integer,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,

    product_id: {
      type: DataTypes.Integer,

    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
