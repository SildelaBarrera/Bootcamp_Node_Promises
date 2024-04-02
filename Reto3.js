// • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.
// • Este ejercicio debe hacerse en una única ejecución de JavaScript

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const fs = require("fs");

const info = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

    info.question("What is your name?", (answer) => {
        
        info.question("What is your surname?", (answer2) => {
                        
            info.question("How old are you?", (answer3) => {
                    
                let person = { name: answer,
                    surname: answer2,
                    age: answer3}

                fs.writeFile('user.json', JSON.stringify(person), function (err, writeData) {
                    fs.readFile('user.json','utf8', function(err, readData) {
                        JSON.parse(readData)
                        console.log(readData);
                    });
                });
                          
                       
            });    
        }); 
    });

    


                          

