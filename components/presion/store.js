const presionModel = require('./model');

function getAllData(){
    return presionModel.find()
}

function getSensor(){
    return presionModel.find({
        //"payload.sensor": 9.219466908885872,
    },"payload.sensor")
}

function addData(data){
    let newData = new presionModel(data)
    return newData.save();
}

module.exports = {
    list: getAllData,
    listSensor : getSensor,
    add: addData,
}
