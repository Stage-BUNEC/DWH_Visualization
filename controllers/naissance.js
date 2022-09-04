let connection = require('../config/db');

class NaissanceController{

     static getNumberNaissance(callback){
      //abscence de la dim naissance
      connection.query('SELECT count(id) as nb FROM datawrehouse_bunec.dim_mariages;' , (error, result)=>{
         if(error) throw error ;
         callback(result) ;
         console.log(result);
      })
    }

}
module.exports = NaissanceController