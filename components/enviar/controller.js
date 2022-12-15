const store = require('./store');

function infoController(data, selector){
    return new Promise(async (resolve, reject) =>{
        if(!data){
            reject('Invalid data');
            return false;
        }

        newInfo = {
            "enable": data.enable,
            "modo": data.modo,
            "control.sp": data.sp,
            "control.P": data.P,
            "control.I": data.I,
            "control.D": data.D,
            "control.manual": data.manual,
        }

        const result = await store.insertInfo(newInfo,selector);
        resolve(result)
    })
}

function getAllData(){
    return store.list();
}

async function getPresion(){
    let data = await store.listPresion();

    console.log(data);
    return data;
}

async function getNivel(){
    let data = await store.listNivel();

    console.log(data);
    return data;
}

async function getFlujo(){
    let data = await store.listFlujo();

    console.log(data);
    return data;
}

async function getTemp(){
    let data = await store.listTemp();

    console.log(data);
    return data;
}

module.exports = {
    infoController,
    getAllData,
    getPresion,
    getNivel,
    getFlujo,
    getTemp,
}





// {
//     "_id":{"$oid":"638d429c4b3bf427e275e465"},
//     "presion": {
//               "control": {
//                   "sp": 0,
//                   "P": 0,
//                   "I": 0,
//                   "D": 0,
//                   "manual": 0
//               },
//               "enable": false,
//               "modo": "OFF"
//           },
//     "nivel": {
//               "control": {
//                   "sp": 0,
//                   "P": 0,
//                   "I": 0,
//                   "D": 0,
//                   "manual": 0
//               },
//               "enable": false,
//               "modo": "OFF"
//           },
//     "flujo": {
//               "control": {
//                   "sp": 0,
//                   "P": 0,
//                   "I": 0,
//                   "D": 0,
//                   "manual": 0
//               },
//               "enable": false,
//               "modo": "OFF"
//           },
//     "temperatura": {
//               "control": {
//                   "sp": 0,
//                   "P": 0,
//                   "I": 0,
//                   "D": 0,
//                   "manual": 0
//               },
//               "enable": false,
//               "modo": "OFF"
//           }

//   }
