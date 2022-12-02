const enviarModel = require('./model');


function getAllData(){
    return enviarModel.find()
}

async function insertInfo(info, selector){

    const oldInfo = await enviarModel.findOne({
        _id: "638a456eb06e8e2f1954629a"
    })

    switch(selector){
        case 'presion':
            oldInfo.presion = info.presion
            break;
        case 'nivel':
            oldInfo.nivel = info.nivel
            break;
        case 'flujo':
            oldInfo.flujo = info.flujo
            break;
        case 'temp':
            oldInfo.temperatura = info.temp
            break;
    }

    updateInfo = await oldInfo.save();
    return updateInfo
}

module.exports = {
    insertInfo,
    list : getAllData,
}


