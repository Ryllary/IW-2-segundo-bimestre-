const express = require('express')
const app = express()


app.get('/',function(req,res){
    res.send("Bem-Vindo swiftie")
})


app.get('/lana',function(req,res){
    res.send("Lana stan is the best")
})

app.get('/songs',function(req,res){
    res.send("my fav songs")
})

app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Olá seu nome é:' + req.params.nome + '\nSua idade: ' + req.params.idade)
    //res.send(req.params)
})

app.listen(8081, function (){
    console.log('server loading in http://localhost:8081')
})