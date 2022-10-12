let connection = require('../config/db');

class NaissanceService {
   
// permet d avoir le nombre de naissance genere
   static async getNumberNai(callback) {
      connection.query("select count(id_naiss) as Nombre  from dim_naissance where "
    + " libelle ='Acte vérifié, validé et Archivé'", (error, result) => {
         if (error) throw error;
         callback(result)
      })
   }

   static async getProfessionPere(callback) {
      connection.query("SELECT profession_pere FROM dim_naissance where libelle ='Acte vérifié, validé et Archivé' ", (error, result) => {
         if (error) throw error;
         callback(result)
      })
   }
   //permet d avoir le statut matrimoniale des la mere pour avoir le nombre d enfant hors mariage
   static async getStatutMatrimoniale(callback) {
      connection.query("SELECT situation_matrimoniale_mere , count(situation_matrimoniale_mere) as nombre FROM dim_dec_naissance " +
     " where situation_matrimoniale_mere ='CELIBATAIRE'" +
     " group by situation_matrimoniale_mere ", (error, result) => {
         if (error) throw error;
         callback(result)
      })
   }
   //permet de representer le graphe montrant le statut matrimoniale de la mere
   static async plotStatusMatrimonial(callback) {
      connection.query("SELECT situation_matrimoniale_mere , count(situation_matrimoniale_mere) as nombre FROM dim_dec_naissance "
    + " group by situation_matrimoniale_mere", (error, result) => {
         if (error) throw error;
         callback(result)
      })
   }


     // avoir la date de chargement dans l'entrepot
    static async getTimeLoadingEtl(callback) {
      connection.query("SELECT date_ajout FROM dim_naissance "
      +" limit 1  ", (error, result) => {
         if (error) throw error;
         callback(result)
      })
   }
   
   //cette methode permet davoir le la nationalite des parents(mere)
   static getNationnaliteMere(callback){
      connection.query("SELECT nationalite_mere , count(nationalite_mere) as Nombre  FROM dim_naissance "+
      "where libelle='Acte vérifié, validé et Archivé' "+
     " group by nationalite_mere " ,(error , result)=>{
      if (error) throw error;
      callback(result)
     })
   }

      //cette methode permet davoir le la nationalite des parents(mere)
      static getNationnalitePere(callback){
         connection.query("SELECT nationalite_pere , count(nationalite_pere) as Nombre  FROM dim_naissance "+
         "where libelle='Acte vérifié, validé et Archivé' "+
        " group by nationalite_pere " ,(error , result)=>{
         if (error) throw error;
         callback(result)
        })
      }
   

// permet d avoir la proportion des sexes declarees
static async getSexeProportion(callback) {
   connection.query("select sexe  , count(sexe) as Nombre from dim_dec_naissance "+
    " group by sexe ;  ", (error, result) => {
      if (error) throw error;
      callback(result)
   })
}
// permet d avoir la proportion des sexes generes
static async getSexeProportionGenere(callback) {
   connection.query("select sexe  , count(sexe) as Nombre from dim_naissance where libelle ='Acte vérifié, validé et Archivé'  "+
    " group by sexe ;  ", (error, result) => {
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
//permet d'avoir le nombre de  declaration provenant des Fosa

   static async getNumberDecFosa(callback) {
      connection.query("SELECT origine_dec , count(origine_dec) as nombre FROM dim_dec_naissance "+
     " where origine_dec = 1 ", (error, result) => {
         if (error) throw error;
         callback(result)
      })
   }

//permet d avoir le nombre d acte genere et archive au BUNEC siege
   static async getNumberArchiveSiege(callback) {
      connection.query("select  count(id_naiss) as Nombre from dim_naissance " +
         " where dim_naissance.libelle = 'Archivé au Siège' ; ", (error, result) => {
            if (error) throw error;
            callback(result)
         })
   }

   //permet d avoir le statut des actes générés
   static async getStatusGenere(callback) {
      connection.query("select libelle  , count(libelle) as Nombre from dim_naissance "+
    +" group by libelle ", (error, result) => {
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
         " inner join dim_naissance as M on M.centre_etat = C.immatriculation " +
         " group by libelle  , sexe ");

      return resultInfo;
   }

   //permet d'avoir  les info sur les actes généres par region arrondissement et departement
   static async getInfoActeGenere(callback) {
      connection.query("select libelle_region , libelle_departement ,libelle_arrondissement ,nomcec ,libelle, M.sexe,  count(sexe) as Nombre , nomcec from dim_region as R " +
         " inner join dim_departement as D on D.code_region = R.code_region " +
         " inner join dim_arrondissement as A on A.code_departement = D.code_departement " +
         " inner join  dim_cec_principale as C on C.code_arrondissement = A.code_arrondissement " +
         " inner join dim_naissance as M on M.centre_etat = C.immatriculation " +
         "where libelle = 'Acte vérifié, validé et Archivé' "+
         " group by libelle  , sexe " , (error, result) => {
            if (error) throw error;
            callback(result)
         });
   }



//permet d avoir tous les codes des CEC
static async getNumCEC() {
   let immatriculation= [] ;
   connection.query("SELECT immatriculation FROM dim_cec_secondaire;", (error, result) => {
         if (error) throw error;
         result.forEach((elm)=>{
            immatriculation.push(elm.immatriculation)
         })
      })
      connection.query("SELECT immatriculation FROM dim_cec_principale;", (error, result) => {
         if (error) throw error;
         result.forEach((elm)=>{
            if ( elm.immatriculation != "" ) {
               immatriculation.push(elm.immatriculation)
            }
         })
      })
      console.log(immatriculation)
}

}
module.exports = NaissanceService;