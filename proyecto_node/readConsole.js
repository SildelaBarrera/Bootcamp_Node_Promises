const readline = require('readline');

const info = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function readConsole(callback){

    info.question("What is your name?", (answer) => {
        
        info.question("What is your surname?", (answer2) => {
                                        
            info.question("How old are you?", (answer3) => {
                    
                let person = { name: answer,
                            surname: answer2,
                            age: answer3}
                console.log(person)  
                return callback(person)

                });    
            }); 
        });   
}

module.exports = {readConsole};




