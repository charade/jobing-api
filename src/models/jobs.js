'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class jobs extends Model {
    static associate(models) {
      this.belongsTo(models.users, {foreignKey : 'userId'});
      this.hasMany(models.contacts, { foreignKey : 'jobId', as : "contacts" })
    }
  };
  jobs.init({
    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4,
    },
    company: DataTypes.STRING(100),
    companyContactName : DataTypes.STRING(80),
    offer : DataTypes.STRING(100),
    description: DataTypes.STRING,
    userId : DataTypes.UUID,
    status : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'jobs',
  });
  return jobs;
};