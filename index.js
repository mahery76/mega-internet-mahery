const path = require('path');
const readlineSync = require('readline-sync');

const daily_byrest = require(path.join(__dirname, 'controllers', 'a_daily_by_rest.js'));
const data_total = require(path.join(__dirname, 'controllers', 'b_total_of_data.js'))
const normal_date = require(path.join(__dirname, 'controllers', 'c_date_of_reg.js'))
function main() {
     console.log(`
     -a Firy ny mega isan andro raha zaraina mitovy izay ambiny ao ?
     -b Firy izay ny mega tokony ho lany hatramzay ka hatram ny androany?
     -d Oviana indray no miconnect raha hiverina amlay data tokony ho lany isan andro ?
     `)

     let input = readlineSync.question('Misafidiana litera iray amin\' ireo ? \n');
     if (input === 'a') {
          let response = daily_byrest()
          console.log( response + " mega isan\'andro no tokony ho lany manomboka izao" )
          main()
     }
     if (input === 'b'){
          let response = data_total()
          console.log(response + " mega izay no tokony ho lany hatramin\' izay. ")
          main()
     }
     if (input === "d"){
          let response = normal_date()
          console.log(response + " no daty tokony hiconnectevanao indray. ")
          main()
     }
       
     else {
          console.log("\n Mba izay litera anaty lisitra ihany ampidirina azafady !")
          main()
     }

}
main()

