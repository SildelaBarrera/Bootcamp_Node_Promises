const fs = require("fs/promises");

// THEN/CATCH

// function writeAndRead(path, user){
//     return fs.writeFile('user.json', JSON.stringify(user))

// .then( () => {
//     return fs.readFile('user.json','utf8')
// })
// .then(readData => {
//     console.log(JSON.parse(readData));
// })
// .catch(err =>{
//     console.log(err);
// })
// }

// ASYNC/AWAIT
async function writeAndRead (path, user){

    await fs.writeFile(path, JSON.stringify(user))
    const readData = await fs.readFile(path, 'utf8')
    console.log(JSON.parse(readData))
}

module.exports = {writeAndRead} 
