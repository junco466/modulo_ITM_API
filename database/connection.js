const db = require('mongoose');



db.Promise = global.Promise;

//Conexion a la base de datos de mongo usando variables de entorno
//parametro la URL de la base de datos
function mongoConnection(url){

    db.connect(url, {
        useNewUrlParser: true,
    })
    .then(() =>{
        console.log('[db]: Conexion exitosa')
    }).catch(e => {
        console.error(e)
    })

}

//Se pueden realizar mas funciones para conectarse a otras bases de datos.....
//..............

module.exports = {
    mongoConnection,
}


