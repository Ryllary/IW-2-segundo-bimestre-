const express = require('express');
const app = express();
const handlebars = require('handlebars')
const Sequelize = require('sequelize')

        app.engine('handlebars',handlebars({defautlayout: 'main'}))
        app.set('view engine' , 'handlebars')

app.listen(8081,function(){
    console.log('Servidor rodando em http://localhost:8081')
})

const { type } = require('express/lib/response')

const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: 'mysql'
})

app.get('/cadastro', function(req,res){
    res.send('ROTA DE CADASTRO DE POSTS')
})

app.listen(8081,function(){
    console.log("")
})
