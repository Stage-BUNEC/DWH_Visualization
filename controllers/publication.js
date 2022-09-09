let connection = require('../config/db');

class PublicationController{

     static getPublicationTable(callback){
      //abscence de la dim naissance
      connection.query('select num_dec , noms_epoux , noms_epouse , nationalite_epoux , nationalite_epouse ,dim_status.libelle from dim_publications inner join dim_status on dim_publications.state = dim_status.state' , (error, result)=>{
         if(error) throw error ;
         callback(result) ;
         console.log(result);
      })
    }

}
module.exports = PublicationController