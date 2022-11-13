const express = require("express")
let bodyParser = require("body-parser")
const app = new express()

// definition du moteur de template
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
//les fichiers static se trouvent dans le dossier pluc
app.use(express.static('public'))

//importation des routes
let mariageRoute = require("./routes/mariageRoute")
let naissanceRoute = require("./routes/naissanceRoute")
let decesRoute = require("./routes/decesRoute")
let visRoute = require("./routes/visRoute")

app.use("/" ,mariageRoute)
app.use("/" ,naissanceRoute)
app.use("/" ,decesRoute )
app.use("/" , visRoute)

// on definit  le port sur lequel doit demarré l application
app.listen(5000, () => {
    console.log("application demarree sur le port 5000")
})
