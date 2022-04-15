'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      this.hasMany(Post, {foreignKey:'userid'})
    }
    toJSON(){
      return {...this.get(), id: undefined}
    }
  }
  User.init({
    uidUser:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:  {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    tableName:"users",
    modelName: 'User',
  });
  return User;
};