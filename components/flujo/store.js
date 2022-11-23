const flujoModel = require('./model');

function getAllData(){
    return flujoModel.find()
}

function getSensor(){
    return flujoModel.find({},"sensor time.fecha time.hora")
}

function addData(data){
    let newData = new flujoModel(data)
    return newData.save();
}

module.exports = {
    list: getAllData,
    listSensor : getSensor,
    add: addData,
}
