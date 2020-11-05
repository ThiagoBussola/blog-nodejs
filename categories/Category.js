const Sequelize = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


// Tirar comentário apenas para atualizar a tabela ou seus relacionamentos
// Category.sync({force:true})

module.exports = Category;