var Student = require('../models/aluno')

// Student list
module.exports.list = () => {
    return Student.find()
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getAluno = id => {
    return id
}

module.exports.addAluno = a => {
    return a
}

module.exports.updateAluno = a => {
    return a
}

module.exports.deleteAluno = id => {
    return id
}