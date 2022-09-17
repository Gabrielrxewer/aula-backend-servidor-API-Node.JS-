const sequelize = require('sequelize');

const database = new sequelize('Node-loggit','gabriel',1234,{
    dialect:'mssql', host:'DESKTOP-GAEB29U',port:1433
    });

    database.sync();

    module.exports = database;
