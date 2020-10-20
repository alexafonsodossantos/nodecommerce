console.log('Carregando dependência: express')
    const express = require('express');
    const app = express();

    
console.log('Carregando dependência: body-parser')
    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


console.log('Carregando dependência: handlebars')
    const handlebars = require('express-handlebars')


console.log('Conectando ao banco de dados...')
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('loja', 'root', '12345', {
        host: "localhost",
        dialect: "mysql"
    })


console.log('Definindo template engine...')
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')



console.log('Gerando rotas...')

    app.get('/', (req, res) => { 

        res.sendFile(__dirname + "/public/index.html");

});


    app.get("/product-detail", (req, res) => { 

        res.send('Detalhes do produto');

});


    app.get("/login", (req, res) => { 

        res.send('Faça login ou cadastre-se');

});


    app.get('/cart', (req, res)=>{

        res.send('Meu carrinho');

})


    app.get('/checkout', (req, res)=>{

        res.send('Confirme os dados da sua compra.');

})

    app.get('/new-product', (req, res) => {

        res.render('create-product');

})


    app.get('/change-product', (req, res)=>{

        res.send('Altere os dados de um produto.');

})


    app.get('/list-sales', (req, res)=>{

        res.send('Lista de vendas efetuadas.');

})


app.post('/save-product', (req, res) => {

    res.render('Produto cadastrado com sucesso!');

})


console.log('Inicializando servidor...')


    app.listen(5500, () => {

        console.log("Servidor ouvindo porta 5500.");

});
