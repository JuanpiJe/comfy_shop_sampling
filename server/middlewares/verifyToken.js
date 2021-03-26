const jwt = require('jsonwebtoken')

module.exports = (req, res , next) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Acceso denegado')
    try{
        let verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next ()
    }catch (error){
        res.status(400).send('Token inválido')
    }
}