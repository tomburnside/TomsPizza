const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://tomburnside:Deeppeace1****@cluster0.mmgynvv.mongodb.net/PizzaApp'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successful');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose