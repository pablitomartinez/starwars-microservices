const { ClientError } = require('../utils/errors')

module.exports = (req,res,next)=>{
    const {name} = req.body;

    if(name) return next();
    // else throw Error('Falta el nombre del personaje')
    else throw new ClientError('Error en el nombre', 401)
}