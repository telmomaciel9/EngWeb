const axios = require('axios')

axios.post('http://localhost:3000/pessoas', {
    id: '111',
    CC: '12345',
    nome: 'Maria'
})
    .then(function(resp){
        console.dir(resp.status)
    })
    .catch(erro => {
        console.log("Erro: " + erro)
    })
