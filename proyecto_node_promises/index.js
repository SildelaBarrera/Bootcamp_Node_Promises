const writeAndReadObj = require ('./writeAndReadObject')
const readConsoleObj = require ('./readConsole')


// THEN/CATCH

// readConsoleObj.readConsole()
// .then(user => {
//     return writeAndReadObj.writeAndRead('./ejemplo.json', user)
// })
// .catch(err => {
//     console.log(err)
// })
    
// ASYNC/AWAIT
async function todoEnUno(){

    try{
        const user = await readConsoleObj.readConsole();
        await writeAndReadObj.writeAndRead('./ejemplo.json', user)
    }
    catch(error){
        console.log(error);
    }
}
todoEnUno()
    