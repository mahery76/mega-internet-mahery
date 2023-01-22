const path = require('path')
const data = require(path.join(__dirname, "..", "model", "data.json"))
//when to be back online consumming regular daily data usage
function normal_date(){
    const daily_data = data.data * 1000 / 30
    const reste = data.reste * 1000

    const day_value = 1000 * 60 * 60 * 24
    const days_by_reste = reste / daily_data
    const dbr_value = days_by_reste * day_value

    const final_day = new Date(data.date_fin)
    const final_day_value = final_day.getTime()

    const response_value = final_day_value - dbr_value + day_value
    const res = new Date(response_value)
    const response = res.toLocaleDateString()

    return response
}

console.log(normal_date())
module.exports = normal_date