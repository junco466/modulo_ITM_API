const enviarModel = require('./model');


function getAllData(){
    return enviarModel.find()
}

function listPresion(){
    return flujoModel.find({},"presion")
}

function listFlujo(){
    return flujoModel.find({},"flujo")
}

function listNivel(){
    return flujoModel.find({},"nivel")
}

function listTemp(){
    return flujoModel.find({},"temperatura")
}

async function insertInfo(info, selector){

    const oldInfo = await enviarModel.findOne({
        _id: "638d429c4b3bf427e275e465"
    })

    // console.log(oldInfo.presion)
    switch(selector){
        case 'presion':
            oldInfo.presion = info
            break;
        case 'nivel':
            oldInfo.nivel = info
            break;
        case 'flujo':
            oldInfo.flujo = info
            break;
        case 'temp':
            oldInfo.temperatura = info
            break;
    }

    updateInfo = await oldInfo.save();
    return updateInfo
}

module.exports = {
    insertInfo,
    list : getAllData,
    listPresion,
    listFlujo,
    listNivel,
    listTemp,
}


