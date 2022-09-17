let NaissanceService = require("../services/naissanceService") ;


const getStatistique =async (req, res) => {

        let data = await NaissanceService.getInfo()
        console.log(data[0])
        res.render("pages/naissance/naissance_gene", { "data": data[0],"entity_name":"Tableau de mariage" })
}

module.exports = {
        getStatistique
}