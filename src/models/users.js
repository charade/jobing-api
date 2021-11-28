'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      this.hasMany(models.jobs, {foreignKey : 'userId', as : "jobs"});
      this.hasMany(models.timeline, { foreignKey : 'userId', as : 'timeline' })
    }
  };
  users.init({
    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4,
    },
    avatar : DataTypes.STRING,
    name: DataTypes.STRING(50),
    email : DataTypes.STRING(50),
    pass: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};