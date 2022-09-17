let connection = require('../config/db');

class NaissanceService {

  static async getNumberNai(callback){
   connection.query("select count(id_naiss) as Nombre  from dim_naisssance " , (error , result)=>{
      if (error) throw error ;
      callback(result)
   })
  }

   static async getInfo() {
      let resultInfo = connection.promise().query("select libelle_region , libelle_departement ,libelle_arrondissement ,nomcec ,libelle, M.sexe,  count(sexe) as Nombre , nomcec from dim_region as R " +
         " inner join dim_departement as D on D.code_region = R.code_region " +
         " inner join dim_arrondissement as A on A.code_departement = D.code_departement " +
         " inner join  dim_cec_principale as C on C.code_arrondissement = A.code_arrondissement " +
         " inner join dim_naisssance as M on M.centre_etat = C.immatriculation " +
         " inner join dim_status as S on S.state = M.state " +
         " group by libelle  , sexe ");

      return resultInfo;
   }

}
module.exports = NaissanceService;