const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
// const para nao mudar a variavel depois


// Configuração
    // Template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Conexão com o banco de dados
    const sequelize = new Sequelize('test', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    })

// Rotas
app.get('/cadastro', function(req,res){
    // res.send('ROTA DE CADASTRO DE POSTS')
    res.render('formulario')
})

app.get('/add', function(req,res){
    res.send('post enviado')
})

app.post('/add', function(req,res){
    res.send('post recebido')
})

app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081')
}) //criou servidor e está escutando a porta

