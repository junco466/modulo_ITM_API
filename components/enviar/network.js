const express = require('express');
const response = require('../../router/response');
const controller = require('./controller')

const router = express.Router();

router.patch('/:sensorSelector', function(req,res){

    controller.infoController(req.body, req.params.sensorSelector)
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
