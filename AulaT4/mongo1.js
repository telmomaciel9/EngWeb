var mongoose = require('mongoose')

var mongoDB = 'mongodb://127.0.0.1/world'
mongoose.connect(mondoDB, {useNewUrlParser})

var db = mongoose.connection

db.on('error', console.log.bind(console, "MongoDB connection error..."))
db.once('open', function(){
    console.log("Conexão ao MongoDB realizada com sucesso...")
})