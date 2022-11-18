const express = require('express');
const controller = require('./controller');
const response = require('../../router/response');

const router = express.Router();

router.get('/', (req, res) => {
    controller.getAllData()
        .then((data) => {
            response.success(req, res, data, 200);
        }).catch(e => {
            response.error(req, res, '[controller]: Unexpected Error', e)
        })
})

router.get('/sensor', (req, res) => {
    controller.getSensor()
        .then((data) => {
            response.success(req, res, data, 200);
        }).catch(e => {
            response.error(req, res, '[controller]: Unexpected Error', e)
        })
})

module.exports = router;
