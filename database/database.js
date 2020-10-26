const Sequelize = require("sequelize")

const connection = new Sequelize('guiapress', 'root', '123', {
    host:'172.17.0.2',
    port:'3306',
    dialect:'mariadb'
});

module.exports = connection;