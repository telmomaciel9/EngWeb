var axios = require('axios')
var Exame = require('../models/emd')

module.exports.list = () => {
    return Exame.find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getExame = id => {
    return Exame.findOne({_id:id})
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addExame = e => {
    return Exame.create(e)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.updateExame = e => {
    return Exame.updateOne({_id:e._id},e)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deleteExame = id => {
    return Exame.deleteOne({_id:id})
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}