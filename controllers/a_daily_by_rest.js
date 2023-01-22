const path = require('path')
const data = require(path.join(__dirname,'..','model', 'data.json'));
const daysBetween = require(path.join(__dirname, 'days_bet.js'))

function daily_byrest (){
    let today = new Date();
    let date_fin = new Date(data.date_fin)
    let interval = daysBetween(today, date_fin)
    let rest = data.reste
    let response = rest * 1000 / interval

    return response
}
// console.log(daily_byrest())

module.exports = daily_byrest
