 const fs = require('fs')

 class Chatbot{
     constructor(){
         
     }
 }

 fs.readdirSync(__dirname+"/Methods/").forEach(function(file){
    if(file != 'index.js'){
        let filename = file.replace('.js','')              
        Chatbot.prototype[filename] = require(__dirname+"/Methods/"+filename)
    }
 })

 module.exports = Chatbot