const express  = require("express");
const  app = new express();

app.get("/" ,(req, res)=>{
    res.send("tout se passe bien serveur demarre");
})
app.listen(3000 ,()=>{
    console.log("le serveur est demaré au port 3000");
}) ;
