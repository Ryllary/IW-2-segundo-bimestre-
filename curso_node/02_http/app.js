//SOLICITAR UM MODULO INTERNO DO NODE CHAMADO: http

var http = require('http')

//Abrindo um servidor http
http.createServer(function(req,res){
    res.end("Cade o hit solo da gaga mds???")

}).listen(8081)

console.log('sever rodando...')