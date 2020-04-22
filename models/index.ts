const dbConfig=require('../config/dbconfig');
const Sequelize=require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
  
  interface data {
    Sequelize:any;
    sequelize:any;
    user:any;
  }
  let db = <data>{
  };
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.user = require("./userModel.js")(sequelize, Sequelize);
  
  module.exports = db;