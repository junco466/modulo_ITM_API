const store = require('./store');

function infoController(data, selector){
    return new Promise(async (resolve, reject) =>{
        if(!data){
            reject('Invalid data');
            return false;
        }

        switch(selector){

            case 'presion':
                newInfo = {
                    "presion.enable": data.enable,
                    "presion.modo": data.modo,
                    "presion.control.sp": data.sp,
                    "presion.control.P": data.P,
                    "presion.control.I": data.I,
                    "presion.control.D": data.D,
                    "presion.control.manual": data.manual,
                }
                break;

            case 'nivel':
                newInfo = {
                    "nivel.enable": data.enable,
                    "nivel.modo": data.modo,
                    "nivel.control.sp": data.sp,
                    "nivel.control.P": data.P,
                    "nivel.control.I": data.I,
                    "nivel.control.D": data.D,
                    "nivel.control.manual": data.manual,
                }
                break;

            case 'flujo':
                newInfo = {
                    "flujo.enable": data.enable,
                    "flujo.modo": data.modo,
                    "flujo.control.sp": data.sp,
                    "flujo.control.P": data.P,
                    "flujo.control.I": data.I,
                    "flujo.control.D": data.D,
                    "flujo.control.manual": data.manual,
                }
                break;

            case 'temp':
                newInfo = {
                    "temp.enable": data.enable,
                    "temp.modo": data.modo,
                    "temp.control.sp": data.sp,
                    "temp.control.P": data.P,
                    "temp.control.I": data.I,
                    "temp.control.D": data.D,
                    "temp.control.manual": data.manual,
                }
                break;

        }

        const result = await store.insertInfo(newInfo,selector);
        resolve(result)
    })
}

module.exports = {
    infoController
}
