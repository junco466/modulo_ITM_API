const { model } = require('mongoose');
const store = require('./store');

function getAllData(){
    return store.list();
}



async function getSensor(){
    let data = await store.listSensor();

    console.log(data);
    return data;
}

// async function getSensor(){
//     let data = await store.list();

//     console.log(data);

//     let sensores = {sensores: []}
//     data.map((x) =>{
//         console.log("entre al map")
//         sensores.sensores.push(x.payload.sensor)
//         console.log(x.payload.sensor);
//     })

//     return sensores;
// }

async function addData(data){
    if(!data){
        return Promise.reject('invalid data insertion');
    }

    return store.add(data);
}

module.exports = {
    getAllData,
    getSensor,
    addData,
}
