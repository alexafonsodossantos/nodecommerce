console.log('Carregando dependência: express')

    const express = require('express');
    const app = express();


console.log('Carregando dependência: body-parser')

    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


console.log('Definindo rotas estáticas...')

    // Repita esse comando quantas vezes forem necessárias para
    // os templates encontrarem imagens, arquivos, folhas de estilo e etc.

    app.use("/css",express.static(__dirname + "/views/layouts/css"));


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
    const Usuarios = require('./models/post')
    

console.log('Gerando rotas...')

    app.get('/', (req, res) => {

        Produtos.findAll().then(function(produtos){

            // Variáveis declaradas dentro desse arquivo podem ser inseridas
            // dentro do Array passado no segundo argumento da função res.render()

            res.render('home', {produtos: produtos})

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

    });


    app.get('/checkout', (req, res)=>{

        res.send('Confirme os dados da sua compra.');

    });


    app.get('/new-product', (req, res) => {

        res.render('create-product');

    });


    app.get('/new-user', (req, res) => {

        res.render('create-user');

    });



    app.get('/change-product', (req, res)=>{

        res.send('Altere os dados de um produto.');

    });


    app.get('/list-sales', (req, res)=>{

        res.send('Lista de vendas efetuadas.');

    });


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
    });

        app.post('/save-user', (req, res) => {

            Usuarios.create({
    
                login: req.body.login,
                email: req.body.email,
                nome_completo: req.body.nome_completo,
                cpf: req.body.cpf,
                cep: req.body.cep,
                endereco_l1: req.endereco_l1,
                endereco_l2: req.endereco_l2,
                cidade: req.body.cidade,
                estado: req.body.estado
    
            }).then(()=>{
    
                res.send("Usuário criado com sucesso!").catch((erro)=> {
                
                    res.send("Deu merda parceiro")})
                
            })
        
        })



console.log('Inicializando servidor...')

    app.listen(5500, () => {

        console.log("Servidor ouvindo porta 5500.");

    })
