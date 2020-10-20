const Sequelize = require('sequelize')
const sequelize = new Sequelize('loja', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
});



// PELO AMOR DE DEUS, ESTUDA E MUDA OS TIPOS DE DADOS 
// DIREITINHO ANTES DE IMPLEMENTAR PRA NÃO FICAR
// EXCLUINDO E CRIANDO TABELA.
// ATT: ALEX DO PASSADO.

const Produtos = sequelize.define('produtos', {

    nome: { type: Sequelize.STRING },
    descricao: { type: Sequelize.TEXT },
    preco_custo: { type: Sequelize.FLOAT },
    preco_venda: { type: Sequelize.FLOAT },
    qtd_estoque: { type: Sequelize.INTEGER },
    qtd_vendidos: { type: Sequelize.INTEGER },
    barcode: { type: Sequelize.TEXT },

});

const Vendas = sequelize.define('vendas', {

    timestamp: { type: Sequelize.STRING },
    usuario: { type: Sequelize.TEXT },
    produtos: { type: Sequelize.TEXT },
    valor_compra: { type: Sequelize.FLOAT },
    forma_pagamento: { type: Sequelize.TEXT },
    postado: { type: Sequelize.DATE },
    entregue: { type: Sequelize.DATE },

});


const Usuarios = sequelize.define('usuarios', {

    login: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    nome_completo: { type: Sequelize.TEXT },
    cpf: { type: Sequelize.TEXT },
    cep: { type: Sequelize.TEXT },
    endereco_l1: { type: Sequelize.TEXT },
    endereco_l2: { type: Sequelize.TEXT },
    cidade: { type: Sequelize.TEXT },
    estado: { type: Sequelize.TEXT },

})

// Usuarios.create({

//    login: "adsantos95",
//    email: "aa.santos95@gmail.com",
//   nome_completo: "Alex Afonso dos Santos",
//    cpf: "447.868.378-65",
//    cep: "13331-250",
//    endereco_l1: "R. Uichi Miyake, 80",
//    endereco_l2: "Colinas de Indaiatuba II",
//    cidade: "Indaiatuba",
//    estado: "SP" 
//
//});

Produtos.sync({force: true});
Vendas.sync({force: true});

Usuarios.create({

    login: "adsantos95",
    email: "aa.santos95@gmail.com",
    nome_completo: "Alex Afonso dos Santos",
    cpf: "447.868.378-65",
    cep: "13331-250",
    endereco_l1: "R. Uichi Miyake, 80",
    endereco_l2: "Colinas de Indaiatuba II",
    cidade: "Indaiatuba",
    estado: "SP" 

});

module.exports = Produtos