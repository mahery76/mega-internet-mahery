import readlineSync from "readline-sync"
import fs, { readFileSync } from 'fs'
import path from 'path'

const data = JSON.parse(fs.readFileSync(path.join(__dirname, './data.json'), 'utf-8'))

console.log(data)

console.log(`
-a Firy ny mega isan andro raha zaraina mitovy izay ambiny ao ?
-b Firy izay ny mega tokony ho lany hatramzay ka hatram ny androany?
-d Oviana indray no miconnect raha hiverina amlay data tokony ho lany isan andro ?
`)

let input = readlineSync.question('Misafidy litera iray ? ');

