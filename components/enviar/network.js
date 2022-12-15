const express = require('express');
const response = require('../../router/response');
const controller = require('./controller')

const router = express.Router();

router.patch('/:sel', function(req,res){

    controller.infoController(req.body, req.params.sel)
                .then((data) => {
                    response.success(req,res,data,200)
                }).catch(e => {
                    response.error(req,res,'Error Interno',500,e)
                })
})

router.get('/', (req, res) => {
    controller.getAllData()
        .then((data) => {
            response.success(req, res, data, 200);
        }).catch(e => {
            response.error(req, res, '[controller]: Unexpected Error', e)
        })
})

router.get('/presion', (req, res) => {
    controller.getPresion()
        .then((data) => {
            response.success(req, res, data, 200);
        }).catch(e => {
            response.error(req, res, '[controller]: Unexpected Error', e)
        })
})

router.get('/nivel', (req, res) => {
    controller.getNivel()
        .then((data) => {
            response.success(req, res, data, 200);
        }).catch(e => {
            response.error(req, res, '[controller]: Unexpected Error', e)
        })
})

router.get('/flujo', (req, res) => {
    controller.getFlujo()
        .then((data) => {
            response.success(req, res, data, 200);
        }).catch(e => {
            response.error(req, res, '[controller]: Unexpected Error', e)
        })
})

router.get('/temperatura', (req, res) => {
    controller.getTemp()
        .then((data) => {
            response.success(req, res, data, 200);
        }).catch(e => {
            response.error(req, res, '[controller]: Unexpected Error', e)
        })
})

module.exports = router;
