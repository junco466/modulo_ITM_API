const { model } = require('mongoose');
const store = require('./store');

function getAllData(){
    return store.list();
}

async function getSensor(){
    let data = await store.list();

    console.log(data);

    let sensores = {sensores: []}
    data.map((x) =>{
        console.log("entre al map")
        sensores.sensores.push(x.payload.sensor)
        console.log(x.payload.sensor);
    })

    return sensores;
}

module.exports = {
    getAllData,
    getSensor,
}
