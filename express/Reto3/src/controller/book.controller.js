
const book = require("../models/Book.js")

let book1 = {title:"Harry Potter and the Philosopher's Stone", type:"Soft cover",author: "J. K. Rowling", price: 10.50, photo:"https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526626585.jpg",id_book: 1};
let book2 = {title:"El nombre del viento", type:"Hard cover", author:"Patrick Rothfuss",price: 22,photo: "https://imagessl8.casadellibro.com/a/l/s7/48/9788401352348.webp", id_book:2};
let book3 = {title:"Caraval", type: "Soft cover", author:"Stephanie Garber",price: 15, photo:"https://tienda.sophosenlinea.com/imagenes/9786077/978607748296.GIF", id_book:3};
let book4 = {title:"Harry Potter and the Chamber of Secrets",type: "Soft cover",author: "J. K. Rowling",price: 11, photo:"https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526637888.jpg",id_book:4};

let library = [book1, book2, book3, book4];


function getStart(request, response){
    let respuesta = {error: false, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

function getBooks(request,response){
    if (request.query.id_book != null){
        respuesta = getABook(request.query.id_book);
    }else{
        respuesta = {error: false, codigo: 200, mensaje: "Estos son los libros existentes", dataLibrary: library};    
    }      
    response.send(respuesta)
}

function getABook(id_book){
    let respuesta = null;
    for (let i = 0; i< library.length; i++){
        if (id_book == library[i].id_book){
            respuesta = {error: false, codigo: 200, mensaje: "Este es el libro", dataBook: library[i]}
        }
    }
    if (respuesta == null){
        respuesta = {error: true, codigo: 400, mensaje: "El libro no existe"}
    }
    return respuesta;
}
function postBook(request, response)
{
    let respuesta = null;
    let book = request.body;
    for (let i = 0; i<library.length; i++){
        if (book.id_book == library[i].id_book){
            respuesta = {error: true, codigo: 400, mensaje: 'El libro ya existe'};                      
        }
    }
    if (respuesta == null){    
        book = {title:book.title, type:book.type, author: book.author,
        price:book.price,photo:book.photo, id_book:book.id_book }
        
        library.push(book);
        respuesta = {error: false, codigo: 200, mensaje: 'Libro creado'};
    }
      
    response.send(respuesta);    
}
function putBook(request, response)
{
    let respuesta = null;
    let book = request.body;
    console.log(book)
    for (let i = 0; i<library.length; i++){
        if (book.id_book == library[i].id_book){
            if(book.title != ""){
                library[i].title = book.title;
            }
            else book.title = book.title;
            if(book.type != ""){
                library[i].type = book.type;
            }
            else book.type = book.type;
            if(book.author != ""){
                library[i].author = book.author;
            }
            else book.author = book.author;
            if(book.price.toString() != ""){
                library[i].price = book.price;
            }
            else book.price = book.price;
            if(book.photo != ""){
                library[i].photo = book.photo;
            }
            else book.photo = book.photo;
            respuesta = {error: false, codigo: 200, mensaje: 'Libro actualizado', dataBook: book}
        }        
    }             
    if (respuesta == null){
        respuesta = {error: true, codigo: 400, mensaje: 'El libro no existe', data:null}
    }
    response.send(respuesta);                                              
}
// OTRA OPCION PARA BUSCAR EN ARRAYS
// function putBook(request, response)
// {

//     let editBook = books.findIndex(book=>book.id_book == request.body.id_book)
//     let respuesta
//     if (editBook != -1)
//     {
//       books[editBook].title  = request.body.title;
//       books[editBook].author = request.body.author;
//       books[editBook].type = request.body.type;
//       books[editBook].price  =request.body.price;
//       books[editBook].photo = request.body.photo;
//       books[editBook].id_book = request.body.id_book;
//       books[editBook].id_user = request.body.id_user;

//         respuesta           = {error: false, codigo: 200, 
//                                 mensaje: 'libro actualizado',data: books[editBook]};
//     }
//     else
//         respuesta = {error: true, codigo: 200, 
//                         mensaje: 'El libro no existe',data: books};

//     response.send(respuesta);
// }

function deleteBook(request, response)
{
    let respuesta;
    let numBooks = library.length;
    let book = request.body;
    library = library.filter(libro => libro.id_book != book.id_book);

    if(numBooks == library.length){
        respuesta = {error: true, codigo: 400, mensaje: 'El libro no existe', dataBook: book};
    }
    else {
        respuesta = {error: false, codigo: 200, mensaje: 'Libro borrado', dataBook: book};
    }
    response.send(respuesta);
}
module.exports = {getStart, getBooks, postBook, putBook, deleteBook};