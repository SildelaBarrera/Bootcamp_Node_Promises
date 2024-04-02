// const fs = require("fs");
// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');
const writeAndReadObj = require ('./writeAndReadObject')
const readConsoleObj = require ('./readConsole')


readConsoleObj.readConsole(person => writeAndReadObj.writeAndRead('./ejemplo.json', person))





