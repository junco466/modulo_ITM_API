const express = require('express');
const server = require('http');
const bodyParser = require('body-parser');
//const socket = require('./socket');

const db = require('./database/connection');
const url = require('./database/mongo_key');
const router = require('./router/routes')

class API {

    constructor(){
        this.app = express();
        server.Server(this.app);
        //--------------------------------------
        //this.router = router(this.app)
        this.dataBaseConnection();
        this.serverConfig();
    }

    serverConfig(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use('/app', express.static('public'));
        this.app.set('port', process.env.PORT || 3000);
        this.router = router(this.app)

        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });
    }

    dataBaseConnection(){
        db.mongoConnection(url.db);
    }

}

const api = new API();
