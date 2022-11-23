const nivelModel = require('./model');

function getAllData(){
    return nivelModel.find()
}

function getSensor(){
    return nivelModel.find({},"sensor time.fecha time.hora")
}

function addData(data){
    let newData = new nivelModel(data)
    return newData.save();
}

module.exports = {
    list: getAllData,
    listSensor : getSensor,
    add: addData,
}
