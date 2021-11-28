'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class jobs extends Model {
    static associate(models) {
      this.belongsTo(models.users, {foreignKey : 'userId'});
    };
  };
  jobs.init({
    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4,
    },
    company: DataTypes.STRING(100),
    adress : DataTypes.STRING(100),
    companyContactName : DataTypes.STRING(80),
    contact : DataTypes.STRING(80),
    offer : DataTypes.STRING(100),
    offerLink : DataTypes.STRING(100),
    date : {
      type : DataTypes.DATE,
      defaultValue : new Date()
    },
    status : {
      type :DataTypes.BOOLEAN,
      defaultValue : false
    },
    userId : DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'jobs',
  });
  return jobs;
};