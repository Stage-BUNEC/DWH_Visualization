let connection = require('../config/db');

class MariageService {

//permet de compter d avoir la nationnalite  de epoux et epouse
     static getNumberMariage (callback)  {
      connection.query('SELECT  nationalite_epouse , COUNT(lieu_epouse) as nombre FROM dim_publications group by nationalite_epouse', (error, result) => {
         if (error) throw error;
         callback(result);
         //console.log(result);
      })
   } 
   
   static getAllStatus(callback) {
      connection.query("SELECT state , libelle FROM dim_status", (error, result) => {
         if (error) throw error;
         callback(result);
      })
   }
   
   static getNumberMariageByStatus(id, callback) {
      connection.query(`select libelle_region , libelle_departement ,libelle_arrondissement , S.libelle , count(S.libelle) from dim_region as R ` +
         " inner join dim_departement as D on D.code_region = R.code_region"
         + " inner join dim_arrondissement as A on A.code_departement = D.code_departement"
         + " inner join dim_mariages as M on '040104' = A.code_arrondissement"
         + ` inner join dim_status as S on S.state = ${id}`
         + " group by R.libelle_region , libelle_arrondissement", (error, result) => {
            if (error) throw error;
            callback(result);
         })
   }

   //permet d avoir le statut des mariages
   static getMariageStatut(callback) {
      connection.query("select libelle , count(libelle) as status from dim_status  as S "
         + "inner join dim_mariages as M "
         + "on M.state = S.state "
         + " group by libelle ",
         (error, result) => {
            if (error) throw error;
            callback(result)
         })
   }

   //permet d avoir le statut des publications
   static getPublicationStatut(callback) {
      connection.query("select libelle , count(libelle) as status from dim_status  as S "
         + "inner join dim_publications as P "
         + "on P.state = S.state "
         + " group by libelle ",
         (error, result) => {
            if (error) throw error;
            callback(result)
         })
   }

   //statistiques sur les nombres d epoux et epouse n'ayants pas de profession
static  getAllProfession(callback){
   connection.query("select profession_epoux , profession_epouse  , count(profession_epoux) as NombreProfEpoux , count(profession_epouse) as NombreProfEpouse "
   +" from dim_mariages"
   +" group by profession_epoux , profession_epouse ", (error, result) => {
      if (error) throw error;
      callback(result)
   })
}

 static async getNombreDeclarationEnregistrement() {
   let nbMa = await connection.promise().query("SELECT count(id) as nombre_ma FROM dim_mariages") ;
  // console.log(nbMa[0][0].nombre_ma);
   let nbDec = await connection.promise().query("SELECT count(num_dec) as nombre_dec FROM dim_publications") ;
  return {"nbMariage" : nbMa[0][0].nombre_ma , "nbDec" : nbDec[0][0].nombre_dec }
}
}
module.exports = MariageService