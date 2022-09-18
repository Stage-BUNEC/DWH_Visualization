let connection = require('../config/db');

class NaissanceService {
// permet d avoir le nombre de naissance genere
   static async getNumberNai(callback) {
      connection.query("select count(id_naiss) as Nombre  from dim_naisssance ", (error, result) => {
         if (error) throw error;
         callback(result)
      })
   }
// permet d avoir la proportion des sexes declarees
static async getSexeProportion(callback) {
   connection.query("select sexe  , count(sexe) as Nombre from dim_naisssance "+
    " group by sexe ; ", (error, result) => {
      if (error) throw error;
      callback(result)
   })
}

//permet d avoir le nombre de declaration de naissance
   static async getNumberDecNais(callback) {
      connection.query("select count(id_naiss) as Nombre from dim_dec_naissance ", (error, result) => {
         if (error) throw error;
         callback(result)
      })
   }
//permet d avoir le nombre d acte genere et archive au BUNEC siege
   static async getNumberArchiveSiege(callback) {
      connection.query("select  count(id_naiss) as Nombre from dim_naisssance " +
         " inner join  dim_status " +
         "on dim_naisssance.state = 10 and dim_status.state  = 10 ; ", (error, result) => {
            if (error) throw error;
            callback(result)
         })
   }

// permet d avoir le nombre d acte genere par sexe et aggrege par region departement arron et CEC
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