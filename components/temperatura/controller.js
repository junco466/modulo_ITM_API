const store = require('./store');

function getAllData(){
    return store.list();
}

async function getSensor(){
    let data = await store.listSensor();

    console.log(data);
    return data;
}


async function addData(data){
    if(!data){
        return Promise.reject('invalid data insertion');
    }

    const newData = {
        "sensorTemp": data.sensorTemp,
        "sensorNiv": data.sensorNiv,
        "PWM": data.PWM,
        "time.fecha" : data.fecha,
        "time.hora" : data.hora,
        "control.enable" : data.enable,
        "control.modo" : data.modo,
        "control.sp" : data.sp,
        "control.P" : data.P,
        "control.I" : data.I,
        "control.D" : data.D,
        "control.manual" : data.manual,
    }

    return store.add(newData);
}

module.exports = {
    getAllData,
    getSensor,
    addData,
}
