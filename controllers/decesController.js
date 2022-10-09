let DecesService =  require("../services/decesService")

const getStatistique = async (req, res) =>{
    let genere = 0 , sexeP =[] ,sexeD= [] , archive ;
    await DecesService.getNumberDecesGenere((result)=>{
        genere = result[0].nombre
        
    })
    await DecesService.getGenereBySexe((result)=>{
        sexeP = result
    })
    await DecesService.getDeclarebySexe((result)=>{
        sexeD = result
    })
    await DecesService.getArchiveSiege((result)=>{
        archive = result[0].Nombre
    })
    let nbdeces =await DecesService.getNumberDecDeces()

    res.render("pages/deces/deces"  , {
        "entity_name" : "Tableau de Deces",
        "nbdeces" : nbdeces , 
        "genere" : genere,
        "sexeP":sexeP,
        "sexeD":sexeD,
        "archive":archive
    })
}


module.exports = {
    getStatistique
}