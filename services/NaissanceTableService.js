let connection = require('../config/db');

class NaissanceTableService {

   static getDeclarationTable(callback) {
      //
      connection.query("SELECT num_dec ,sexe, nationalite_mere , nationalite_pere , situation_matrimoniale_mere , libelle FROM datawarehouse.dim_dec_naissance;", (error, result) => {
         if (error) throw error;
         callback(result);
        // console.log(result);
      })
   }
   
   static getNaissanceGenereTable(callback) {
      //abscence de la dim naissance
      connection.query("select num_dec , num_acte , sexe ,centre_etat , lieu_naiss , libelle from dim_naissance  where libelle ='Acte vérifié, validé et Archivé' ", (error, result) => {
            if (error) throw error;
            callback(result);
        //    console.log(result);
         })
   }
}
module.exports = NaissanceTableService