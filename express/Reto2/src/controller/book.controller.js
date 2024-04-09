
const books = require("../models/Book.js")

let book = null 
// {title:'La Busca', author: 'Pio Baroja', numPages:472};

function getStart(request, response)
{
    let respuesta = {error: false, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}
function getBook(request, response)
{
    let respuesta;
    let title = request.query.title;
    if (title != null && (request.query.title === book.title))
        respuesta = {error: false, codigo: 200, mensaje: "Este es el libro", data: book}
    else 
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe", data: null}

    response.send(respuesta);      
}
function postBook(request, response)
{
    let respuesta; 
    
    console.log(request.body)
    if (book === null)
    {
        book     = {title: request.body.title, 
                       author: request.body.author,
                       numPages:request.body.numPages}
        
        respuesta   = {error: false, codigo: 200, mensaje: 'Libro creado',data: book};
    }
    else
        respuesta = {error: true, codigo: 200, mensaje: 'El libro ya existe', data: null};

    response.send(respuesta);
}
function putBook(request, response)
{
    let respuesta
    if (book !=  null)
    {
        book.title      = request.body.title;
        book.author   = request.body.author;
        book.numPages = request.body.numPages;
        respuesta           = {error: false, codigo: 200, mensaje: 'Libro actualizado',data: book};
    }
    else
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe',data: book};

    response.send(respuesta);
};
function deleteBook(request, response)
{
    let respuesta
    if (book != null)
    {    
        book     = null;
        respuesta   = {error: false, codigo: 200, mensaje: 'Libro borrado',data: book};
    }  
    else
        respuesta   = {error: true, codigo: 200, mensaje: 'El libro no existe',data: null};

    response.send(respuesta);
};
module.exports = {getStart, getBook, postBook, putBook, deleteBook};