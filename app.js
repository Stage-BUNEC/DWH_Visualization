const express = require("express");
let bodyParser = require("body-parser");
const app = new express();


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
let MariageController = require('./controllers/mariage');
let PublicationController = require('./controllers/publication');

app.get("/", async (req, res) => {
    const labels = [];
    const data = [];
    const libelle = [] , state = [] , resultS = []  , status = [] , pub = [];

    await MariageController.getNumberMariage((result) => {
        result.forEach(elm => {
            if (elm.nationalite_epouse === "") {
                labels.push("Vide");
            } else {
                labels.push(elm.nationalite_epouse);
            }
            data.push(elm.nombre);
        });
    })

    await  MariageController.getAllStatus((result) => {
        result.forEach(elm => {
            status.push(elm);
        });
    })

    await MariageController.getMariageStatut((result) => {
        result.forEach(elm => {
            state.push(elm.status);
            libelle.push(elm.libelle);
            resultS.push(elm)
        });
    })
    await MariageController.getPublicationStatut((result) => {
        result.forEach(elm => {
            pub.push(elm);
        });
    })

 let value =  await  MariageController.getMariageStatutd();
    res.render("pages/index", {
        "data": data,
        "labels": labels,
        "state": state,
        "libelle": libelle,
        "result": resultS,
        'status': status,
        "publication":pub
    })
})


app.post("/", (req, res) => {
    let id = req.body.status;
    //  console.log(req.body.status);
    MariageController.getNumberMariageByStatus(id, (result) => {
        console.log(result)
    })
    res.redirect("/")
})


app.get("/publication", (req, res) => {
    let data = [];
    PublicationController.getPublicationTable((result) => {
        res.render("pages/mariage/publication", { "data": result, })
    })

})


app.listen(3000, () => {
    console.log("le serveur est demaré au port 3000");
});
