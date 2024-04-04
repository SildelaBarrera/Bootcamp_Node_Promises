const { stdin: input, stdout: output } = require('node:process');
const fs = require("fs/promises");
const readline = require("readline");
const { rejects } = require('node:assert');

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
    return (question);
}

let user = {
    name: "",
    surname: "",
    age: ""
}


// THEN/CATCH
// function readConsole() {
//     const lectura = new Promise((resolve, reject) => {

//         pregunta("What is your name?")
//             .then((respuesta) => {
//                 user.name = respuesta
//                 return pregunta("What is your surname?")
//             })
//             .then((respuesta2) => {
//                 user.surname = respuesta2
//                 return pregunta("How old are you?")
//             })
//             .then((respuesta3) => {
//                 user.age = respuesta3
//                 resolve (user);
//             })
//             .catch(err => {
//                 console.log(err)
//                 reject (err);
//             })
//     })
//         return lectura
// }


// ASYNC/AWAIT 
async function readConsole(){

    try{ 
        user.name = await pregunta("What is your name?");
        user.surname = await pregunta("What is your surname?");
        user.age = await pregunta("How old are you?");
        return user;
    }
    catch(error){
        console.log(error)
    }
}                   

module.exports = { readConsole }