const path = require('path')
const data = require(path.join(__dirname, "..", "model", "data.json"))
const daysBetween = require(path.join(__dirname, 'days_bet.js'))
// ny totalin'ny mega tokony ho lany hatramzay
function data_total() {
    // DAYS LASA = ISAN JOURS IZAY LASA
    let today = new Date()
    let date_debut = new Date(data.date_debut)
    let interval = daysBetween(date_debut, today)

    // DAILY DATA = TOTAL MEGA / 30
    let daily_data = data.data * 1000 / 30

    // RESPONSE = DAYS LASA * DAILY DATA
    let response = daily_data * interval
    return response
}
module.exports = data_total
