let DecesService =  require("../services/decesService")

// cette mthode permet de retourner les statistiques sur les deces

const getStatistique = async (req, res) =>{
    let genere = 0 , sexeP =[] ,sexeD= [] , archive , date ;
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

    await DecesService.getTimeLoadingEtl((result)=>{
        date = new Date(result[0].date_ajout);
    })
    let nbdeces =await DecesService.getNumberDecDeces()

    res.render("pages/deces/deces"  , {
        "entity_name" : "Tableau de Deces",
        "nbdeces" : nbdeces , 
        "genere" : genere,
        "sexeP":sexeP,
        "sexeD":sexeD,
        "archive":archive,
        "date": date.toLocaleDateString(),
        "heure": date.toLocaleTimeString(),
    })
}


module.exports = {
    getStatistique
}