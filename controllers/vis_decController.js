let Vis_decService = require("../services/vis_decService");
let { FormatMois } = require("../services/utils")

const getGraph = async (req, res) => {
   let data = [], data2 = []
   await Vis_decService.getNaissanceByMois((result) => {
      data = FormatMois(result)
   })

   await Vis_decService.getNaissanceByYear((result) => {
      //  console.log(result)
      data2 = result
   })

   let getWork = await Vis_decService.getWork()
   res.render("pages/vis_date_dec/courbe_dec",
      {
         "entity_name": "Visualisation par Mois et Année",
         "data_naissance": data,
         "data_naissance_year": data2
      }
   )
}

module.exports = { getGraph }