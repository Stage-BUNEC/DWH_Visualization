const express  = require("express");
const  app = new express();

let NaissanceController = require('./controllers/naissance');

app.set("view engine", "ejs");
app.use(express.static('assets'));

app.get("/" ,(req, res)=>{
    NaissanceController.getNumberNaissance((result)=>{
        res.render("pages/index" , {"naissance":result[0].nb})
    })
   
})


app.listen(3000 ,()=>{
    console.log("le serveur est demaré au port 3000");
}) ;
