let DecesService =  require("../services/decesService")

const getStatistique = async (req, res) =>{
  
    let nbdeces =await DecesService.getNumberDecDeces()
    res.render("pages/deces/deces"  , {
        "entity_name" : "Tableau de Deces",
        "nbdeces" : nbdeces
    })
}


module.exports = {
    getStatistique
}