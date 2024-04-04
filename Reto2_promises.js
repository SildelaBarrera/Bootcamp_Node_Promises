// • Crea un objeto con las siguientes propiedades: name, surname, age.
// • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.
// • Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// ejecutar el archivo de nuevo.
const fs = require("fs/promises");

let user = {
    name: "Matilda",
    surname: "Wormwood",
    age: "8",
}

// THEN/CATCH
fs.writeFile('user.json', JSON.stringify(user))
.then( () => {
    return fs.readFile('user.json','utf8')
})
.then(readData => {
    console.log(JSON.parse(readData));
})
.catch(err =>{
    console.log(err);
    
})

// ASYNC/AWAIT
// async function writeRead (){

//     await fs.writeFile('user2.json', JSON.stringify(user))
//     const lectura = await fs.readFile('user2.json', 'utf8')
//     console.log(JSON.parse(lectura))
// }
// writeRead ()
