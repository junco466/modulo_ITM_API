const presionModel = require('./model');

function getAllData(){
    return presionModel.find()
}

function getSensor(){
    return presionModel.find({sw_presion})
}

module.exports = {
    list: getAllData,
}
