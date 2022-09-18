let MariageService = require("../services/mariageService")
let PublicationService = require("../services/publicationService")
let NaissanceService = require("../services/naissanceService")

const mariageInfo = async (req, res) => {
    const labels = [];
    const data = [];
    let profession = [] , nationalite =[] , date_ajout;
    const libelle = [] , state = [] , resultS = []  , status = [] , pub = [] ;

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
    await NaissanceService.getTimeLoadingEtl((resultat) =>{
        date_mjr = new Date(resultat[0].date_ajout);
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
        "nationalite":nationalite,
        "entity_name":"Tableau de mariage" ,
        "date" : date_mjr.toLocaleDateString(),
        "heure" : date_mjr.toLocaleTimeString() 
    })
}
const getPublicationTable = (req, res) => {
    let data = [];
    PublicationService.getPublicationTable((result) => {
        res.render("pages/mariage/publication", { "data": result,"entity_name":"Tableau de mariage" })
    })

}

const getMariageTable = (req, res) => {
    let data = [];
    PublicationService.getMariageTable((result) => {
        res.render("pages/mariage/mariageTable", { "data": result,"entity_name":"Tableau de mariage" })
    })

}

module.exports = {
    mariageInfo ,
    getPublicationTable ,
    getMariageTable
}