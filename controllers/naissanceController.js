let NaissanceService = require("../services/naissanceService");


const getStatistique = async (req, res) => {
        let sexe = [] , Nb_dec , Nb_arch , sexePorption = [];
        await NaissanceService.getNumberNai((result) => {
                sexe = result;
        })
        await NaissanceService.getNumberDecNais((result) => {
                Nb_dec = result;
        })

        await NaissanceService.getNumberArchiveSiege((result) => {
                Nb_arch = result;
        })
        await NaissanceService.getSexeProportion((result) => {
                result.forEach(element => {
                        if (element.sexe ==="M") {
                                sexePorption.push({sexe:"Masculin" , "Nombre": element.Nombre })
                        }else{
                                sexePorption.push({sexe:element.sexe , "Nombre": element.Nombre })
                        }
                });
        })

        let data = await NaissanceService.getInfo()
        console.log(sexePorption);
        res.render("pages/naissance/naissance_gene", {
                "data": data[0],
                "entity_name": "Tableau d 'acte de naissance génére",
                "Nombre_sexe" : sexe,
                "nombre_dec" : Nb_dec[0].Nombre,
                "archive" : Nb_arch[0].Nombre ,
                "sexePorption" : sexePorption
        })
}

module.exports = {
        getStatistique
}