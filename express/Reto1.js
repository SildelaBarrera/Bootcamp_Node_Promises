
const express = require ('express');
const app = express();

app.get('/', function (request, response){
    console.log(request.url)
    console.log(request.method)
    console.log(request.headers['user-agent'])
    console.log('Petición recibida del cliente')
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({ok:true,message:'Recibido!'}));   
});

app.get('/bye', function (request, response){
    console.log(request.url)
    console.log(request.method)
    console.log(request.headers['user-agent'])
    console.log('Petición recibida del cliente')
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({ok:true,message:'Adios!'}));    
});

app.listen(3000);