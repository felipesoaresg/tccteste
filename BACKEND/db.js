//1° video
//arquivo de inicialização do BD
const Sequelize = require('sequelize');
const sequelize = new Sequelize('lanchonete2', 'root', 'usbw', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3307',
});

module.exports = sequelize;
