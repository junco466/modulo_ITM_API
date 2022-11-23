const express = require('express');
const presion = require('../components/presion/network');
const flujo = require('../components/flujo/network');
const temperatura = require('../components/temperatura/network');
const nivel = require('../components/nivel/network');
const enviar = require('../components/enviar/network');

const routes = function(server){
    server.use('/presion', presion);
//   server.use('/flujo', flujo)
//   server.use('/temperatura', temperatura)
    server.use('/nivel', nivel);
//   server.use('/enviar', enviar);
}

module.exports = routes;
