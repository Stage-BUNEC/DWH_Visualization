let connection = require('../config/db');

class MariageController{

     static getNumberMariage(callback){
      connection.query('SELECT  nationalite_epouse , COUNT(lieu_epouse) as nombre FROM dim_publications group by nationalite_epouse' , (error, result)=>{
         if(error) throw error ;
         callback(result) ;
         console.log(result);
      })
    }
    static getAllStatus(callback){
      connection.query("SELECT state , libelle FROM dim_status",(error , result)=>{
         if (error) throw error ;
         callback(result);
      })
    }
   
}
module.exports = MariageController