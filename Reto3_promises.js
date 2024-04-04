// • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.
// • Este ejercicio debe hacerse en una única ejecución de JavaScript

const { stdin: input, stdout: output } = require('node:process');
const fs = require("fs/promises");
const readline = require ("readline");
const { resolve } = require('node:path');


function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(pregunta, (respuesta) => {
    resolve(respuesta);
    rl.close();
    console.log(respuesta)
  });
});
  return(question);
}

let user = { name: "",
    surname: "",
    age:""}

// THEN/CATCH
    pregunta("What is your name?")
    .then((respuesta) => {
        user.name = respuesta
        return pregunta("What is your surname?")
    })
        .then((respuesta2) => {
            user.surname = respuesta2
            return pregunta("How old are you?")
        })
            .then ((respuesta3) => {  
                user.age = respuesta3
                return fs.writeFile('user.json', JSON.stringify(user))
            })
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
// async function readConsole(){
//     try{ 
//         user.name = await pregunta("What is your name?");
//         user.surname = await pregunta("What is your surname?");
//         user.age = await pregunta("How old are you?");
//         await fs.writeFile('user2.json', JSON.stringify(user))
//         const readData = await fs.readFile('user2.json','utf8')
//         console.log(JSON.parse(readData));
//     }
//     catch(error){
//         console.log("error")
//     }
// }                     
// readConsole()