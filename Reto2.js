// • Crea un objeto con las siguientes propiedades: name, surname, age.
// • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.
// • Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// ejecutar el archivo de nuevo.
const fs = require("fs");

let user = {
    name: "Matilda",
    surname: "Wormwood",
    age: "8",
}

fs.writeFile('user.json', JSON.stringify(user), function (err, writeData) {
    fs.readFile('user.json','utf8', function(err, readData) {
        JSON.parse(readData)
        console.log(readData);
    });
});
