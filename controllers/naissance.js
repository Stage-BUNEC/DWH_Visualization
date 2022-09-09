let connection = require('../config/db');

class NaissanceController{

     static getNumberNaissance(callback){
      //abscence de la dim naissance
      connection.query('SELECT  nationalite_epouse , COUNT(lieu_epouse) as nombre FROM dim_publications group by nationalite_epouse' , (error, result)=>{
         if(error) throw error ;
         callback(result) ;
         console.log(result);
      })
    }

}
module.exports = NaissanceController