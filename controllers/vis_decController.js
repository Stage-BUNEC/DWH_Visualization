let Vis_decService =  require("../services/vis_decService");

const getGraph =async (req, res) =>{
   res.render("pages/vis_date_dec/courbe_dec")
}

module.exports = {getGraph}