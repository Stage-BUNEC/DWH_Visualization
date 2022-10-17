const express = require("express")
let bodyParser = require("body-parser")
const app = new express()


app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
let mariageRoute = require("./routes/mariageRoute")
let naissanceRoute = require("./routes/naissanceRoute")
let decesRoute = require("./routes/decesRoute")
let visRoute = require("./routes/visRoute")


app.post("/", (req, res) => {
    let id = req.body.status;
    //  console.log(req.body.status);
    MariageController.getNumberMariageByStatus(id, (result) => {
        console.log(result)
    })
    res.redirect("/")
})

app.use("/" ,mariageRoute)
app.use("/" ,naissanceRoute)
app.use("/" ,decesRoute )
app.use("/" , visRoute)

app.listen(3000, () => {
    console.log("le serveur est demaré au port 3000")
})
