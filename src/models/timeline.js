'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class timeline extends Model {
    static associate(models) {
      this.belongsTo(models.users, {foreignKey : 'userId'})
    }
  };
  timeline.init({
    id: {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4
    },
    //applies per day
    count:{ 
      type : DataTypes.INTEGER,
      defaultValue : 0
    },
    date: {
      type :DataTypes.DATE,
      defaultValue : new Date(),
      allowNull : false
    },
    userId : DataTypes.UUID
  }, {
    sequelize,
    modelName: 'timeline',
  });
  return timeline;
};