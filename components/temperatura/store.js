const tempModel = require('./model');

function getAllData(){
    return tempModel.find()
}

function getSensor(){
    return tempModel.find({
        //"payload.sensor": 9.219466908885872,
    },"sensorTemp sensorNiv time.fecha time.hora")
}

function addData(data){
    let newData = new tempModel(data)
    return newData.save();
}

module.exports = {
    list: getAllData,
    listSensor : getSensor,
    add: addData,
}
