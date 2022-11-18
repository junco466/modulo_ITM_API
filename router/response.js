exports.success = function(req, res, message,status){
    res.status(status || 200).send({
      error: '',
      body: message
    });
  }

  exports.error = function(req, res, message, status, details){
    //error que se va a presentar desde el servidor
    //no dar detalles al cliente.
    console.error('[Respones error]: ' + details);

    res.status(status || 500).send({
      error: message,
      body: ''
    });
  }
