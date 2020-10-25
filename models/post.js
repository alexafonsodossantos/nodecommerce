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


var Usuarios = sequelize.define('usuarios', {

    login: { type: Sequelize.STRING },
    senha: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    nome_completo: { type: Sequelize.TEXT },
    cpf: { type: Sequelize.TEXT },
    cep: { type: Sequelize.TEXT },
    endereco_l1: { type: Sequelize.TEXT },
    endereco_l2: { type: Sequelize.TEXT },
    cidade: { type: Sequelize.TEXT },
    estado: { type: Sequelize.TEXT },

});


var Carts = sequelize.define('carts', {

    user_id: { type: Sequelize.STRING },
    product_id: { type: Sequelize.STRING },
    product_qtd: { type: Sequelize.INTEGER },
    
});


module.exports = { Produtos, Usuarios, Carts }
