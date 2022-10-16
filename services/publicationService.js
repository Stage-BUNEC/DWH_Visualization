let connection = require('../config/db');

class PublicationService {

   static getPublicationTable(callback) {
      //abscence de la dim naissance
      connection.query('select num_dec  , nationalite_epoux , nationalite_epouse ,dim_status.libelle from dim_publications inner join dim_status on dim_publications.state = dim_status.state', (error, result) => {
         if (error) throw error;
         callback(result);
         console.log(result);
      })
   }
   static getMariageTable(callback) {
      //abscence de la dim naissance
      connection.query("select num_dec  ,num_acte,  nationalite_epoux , nationalite_epouse ,dim_status.libelle "
         + " from dim_mariage "
         + " inner join dim_status "
         + "on dim_mariage.state = dim_status.state where dim_mariage.state = 9", (error, result) => {
            if (error) throw error;
            callback(result);
            console.log(result);
         })
   }
}
module.exports = PublicationService