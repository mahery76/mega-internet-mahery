const path = require('path');
const readlineSync = require('readline-sync');

const daily_byrest = require(path.join(__dirname, 'controllers', 'a_daily_by_rest.js'));

function main() {
     console.log(`
     -a Firy ny mega isan andro raha zaraina mitovy izay ambiny ao ?
     -b Firy izay ny mega tokony ho lany hatramzay ka hatram ny androany?
     -d Oviana indray no miconnect raha hiverina amlay data tokony ho lany isan andro ?
     `)

     let input = readlineSync.question('Misafidiana litera iray amin \'ireo ? \n ');
     if (input === 'a') {
          const response = daily_byrest()
          console.log( response + " mega isan\'andro no tokony ho lany manomboka izao" )
          main()
     }


     else {
          console.log("\n Mba izay litera anaty lisitra ihany ampidirina azafady !")
          main()
     }
}
main()

