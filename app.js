const express  = require("express");
const  app = new express();

let MariageController = require('./controllers/mariage');
let PublicationController = require('./controllers/publication');
app.set("view engine", "ejs");
app.use(express.static('public'));


app.get("/" ,(req, res)=>{
    const labels=[];
    const data = [];
    MariageController.getNumberMariage((result)=>{
        result.forEach(elm => {
            if (elm.nationalite_epouse ==="") {
                labels.push("Vide")
            } else {
                labels.push(elm.nationalite_epouse)
            }
            data.push(elm.nombre)
        });
        res.render("pages/index" , {"data":data, "labels":labels, "status": "status"})
    })
  /*  MariageController.getAllStatus((result)=>{
        result.forEach(elm => {
                status.push(elm.state)
                console.log(elm.state);
        });
       // console.log(status)
    })*/
})


app.get("/publication" ,(req, res)=>{
    let data = [];
    PublicationController.getPublicationTable((result)=>{
        res.render("pages/mariage/publication" , {"data":result,})
    })
   
})


app.listen(3000 ,()=>{
    console.log("le serveur est demaré au port 3000");
}) ;
