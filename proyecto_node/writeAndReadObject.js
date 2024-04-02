const fs = require("fs");


function writeAndRead (path, obj){
    fs.writeFile(path, JSON.stringify(obj), function (err, writeData) {
        fs.readFile(path ,'utf8', function(err, readData) {
            JSON.parse(readData)
            console.log(readData);
        });
    });
}

module.exports = {writeAndRead};