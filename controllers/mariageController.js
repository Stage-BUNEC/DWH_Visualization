let MariageService = require("../services/mariageService")
let PublicationService = require("../services/publicationService")

const mariageInfo = async (req, res) => {
    const labels = [];
    const data = [];
    let profession = [] , nationalite =[] ;
    const libelle = [] , state = [] , resultS = []  , status = [] , pub = [];

    await MariageService.getNumberMariage((result) => {
        result.forEach(elm => {
            if (elm.nationalite_epouse === "") {
                labels.push("Vide");
            } else {
                labels.push(elm.nationalite_epouse);
            }
            data.push(elm.nombre);
        });
        nationalite = result ;
    })

    await  MariageService.getAllStatus((result) => {
        result.forEach(elm => {
            status.push(elm);
        });
    })

    await MariageService.getMariageStatut((result) => {
        result.forEach(elm => {
            state.push(elm.status);
            libelle.push(elm.libelle);
            resultS.push(elm)
        });
    })
    await MariageService.getPublicationStatut((result) => {
        result.forEach(elm => {
            pub.push(elm);
        });
    })
    await MariageService.getAllProfession((result) => {
        result.forEach(elm => {
           profession.push(elm);
        } )
    })
    let stat = await MariageService.getNombreDeclarationEnregistrement();
    res.render("pages/index", {
        "data": data,
        "labels": labels,
        "state": state,
        "libelle": libelle,
        "result": resultS,
        'status': status,
        "publication":pub , 
        "profession"  : profession,
        "stat":stat,
        "nationalite":nationalite
    })
}
const getPublicationTable = (req, res) => {
    let data = [];
    PublicationService.getPublicationTable((result) => {
        res.render("pages/mariage/publication", { "data": result, })
    })

}

const getMariageTable = (req, res) => {
    let data = [];
    PublicationService.getMariageTable((result) => {
        res.render("pages/mariage/mariageTable", { "data": result, })
    })

}

module.exports = {
    mariageInfo ,
    getPublicationTable ,
    getMariageTable
}