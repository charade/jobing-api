'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class memos extends Model {
    static associate(models) {
      this.belongsTo(models.users, { foreignKey : 'userId'})
    }
  };
  memos.init({
    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4,
    },
    notes: DataTypes.STRING,
    userId : DataTypes.UUID
  }, {
    sequelize,
    modelName: 'memos',
  });
  return memos;
};