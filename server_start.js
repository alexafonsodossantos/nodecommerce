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


console.log('Carregando dependência: /models/post.js')
    const Produtos = require('./models/post')



console.log('Gerando rotas...')

    app.get('/', (req, res) => {


        Produtos.findAll().then(function(produtos){

            // Variáveis declaradas dentro desse arquivo podem ser inseridas
            // dentro do Array passado no segundo argumento da função res.render()

            res.render('home', {produtos: produtos})
            console.log(produtos)

        })

        

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

        Produtos.create({

            nome: req.body.nome,
            descricao: req.body.descricao,
            preco_custo: req.body.preco_custo,
            preco_venda: req.body.preco_venda,
            qtd_estoque: req.body.qtd_estoque,
            qtd_vendidos: req.body.qtd_vendidos,
            barcode: req.body.barcode

        }).then(()=>{

            res.send("Post criado com sucesso!").catch((erro)=> {
            
                res.send("Houston, temos um problema...")})
            
        })

})


console.log('Inicializando servidor...')

    app.listen(5500, () => {

        console.log("Servidor ouvindo porta 5500.");

    });
