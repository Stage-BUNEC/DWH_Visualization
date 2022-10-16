let Vis_decService =  require("../services/vis_decService");
let {FormatMois} = require("../services/utils")

const getGraph =async (req, res) =>{
   let datax =[1,2,3,4,5,6,7,8,9,10,11,12] , data =[]
    await Vis_decService.getNaissanceByMois((result)=>{
      data = FormatMois(result)
      data.forEach(elm => {
         if (elm.mois === "Janvier") {
            datax[0] = elm
         }else if (elm.mois === "Fevrier") {
            datax[1] = elm
         }else if (elm.mois === "Mars") {
            datax[2] = elm
         }else if (elm.mois === "Avril") {
            datax[3] = elm
         }else if (elm.mois === "Mai") {
            datax[4] = elm
         }else if (elm.mois === "Juin") {
            datax[5] = elm
         }else if (elm.mois === "Juillet") {
            datax[6] = elm
         }else if (elm.mois === "Aout") {
            datax[7] = elm
         }else if (elm.mois === "Septembre") {
            datax[8] = elm
         }else if (elm.mois === "Octobre") {
            datax[9] = elm
         }else if (elm.mois === "Novembre") {
            datax[10] = elm
         }else if (elm.mois === "Decembre") {
            datax[11] = elm
         }
       })
    })
  
  
    let getWork =await Vis_decService.getWork()
   res.render("pages/vis_date_dec/courbe_dec" ,
   {
      "entity_name" : "Visualisation par Mois et Année",
      "data_naissance":datax
   }
   )
}

module.exports = {getGraph}