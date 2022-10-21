'use strict';

const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type:DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      }
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {
    sequelize,
    modelName: 'User',
  });

  User.login = (email, password)=>{
    return User.findOne({
      where: {
        email
      }
    }).then(user=>{
      if(!user) return null;
      return user.authenticatePassword(user, password).then(valid=>{
        if(valid) return user;

        return null;
      })
    })
  }

  User.prototype.authenticatePassword = (user, password)=>{
    return new Promise((res,rej)=>{
      bcrypt.compare(password, user.password_hash, (err,valid)=>{
        if(err) return rej(err);

        res(valid);
      })
    })
  }

  User.beforeCreate((user, options)=>{
    return new Promise((res, rej)=>{
      if(user.password){
        bcrypt.hash(user.password, 10, (err, hash)=>{
          user.password_hash = hash;
          res();
        })
      }
    })
  });
  return User;
};