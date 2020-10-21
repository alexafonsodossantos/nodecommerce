const db = require('./db')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('loja', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
})

var Produtos = sequelize.define('produtos', {

    nome: { type: Sequelize.STRING },
    descricao: { type: Sequelize.TEXT },
    preco_custo: { type: Sequelize.FLOAT },
    preco_venda: { type: Sequelize.FLOAT },
    qtd_estoque: { type: Sequelize.INTEGER },
    qtd_vendidos: { type: Sequelize.INTEGER },
    barcode: { type: Sequelize.TEXT },

});

module.exports = Produtos