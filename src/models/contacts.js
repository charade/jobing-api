'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contacts extends Model {
    
    static associate(models) {
      this.belongsTo(models.jobs, { foreignKey : "jobId" })
    }
  };
  contacts.init({
    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4
    },
    label: DataTypes.STRING,
    value: DataTypes.STRING,
    jobId : DataTypes.UUID
  }, {
    sequelize,
    modelName: 'contacts',
  });
  return contacts;
};