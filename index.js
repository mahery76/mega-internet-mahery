const path = require('path');
const data = require(path.join(__dirname, 'model', 'data.json'));

console.log(data);

console.log(`
-a Firy ny mega isan andro raha zaraina mitovy izay ambiny ao ?
-b Firy izay ny mega tokony ho lany hatramzay ka hatram ny androany?
-d Oviana indray no miconnect raha hiverina amlay data tokony ho lany isan andro ?
`)

let input = readlineSync.question('Misafidy litera iray ? ');

