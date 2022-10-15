let connection = require('../config/db');

class DecesService{

    //  Cette methode permet d avoir le nombre d acte genere
    static getNumberDecesGenere(callback){
        connection.query("SELECT  count(libelle) as nombre  from dim_deces where libelle ='Acte vérifié, validé et Archivé'" , (error,result)=>{
            if (error) throw error;
            console.log(result)
            callback(result);
        })
    }
//cette methode permet de donner le nombre de deces gene par sexe
static getGenereBySexe(callback){
    connection.query("select sexe , count(sexe) as Nombre from dim_deces where libelle='Acte vérifié, validé et Archivé' group by sexe" , (error , result)=>{
        if (error) throw error
        callback(result)
    })
}

  // avoir la date de chargement dans l'entrepot
  static async getTimeLoadingEtl(callback) {
    connection.query("SELECT date_ajout FROM dim_deces order by id  "
    +" limit 1  ", (error, result) => {
       if (error) throw error;
       callback(result)
    })
 }

//permet d avoir les proportions des actes de deces declares  par sexe

static getDeclarebySexe(callback){
    connection.query("select sexe , count(sexe) as Nombre from dim_dec_deces  "+
     "group by sexe" , (error , result)=>{
        if(error) throw error;
        callback(result)
     })
}

//cette methode pert d'avoir le nombre d acte archive au siege
static getArchiveSiege (callback){
    connection.query("select count(id) as Nombre from dim_deces where libelle='Archivé au Siège'" , (error,result)=>{
        if(error) throw error ;
        callback(result)
    })
}

    //cette  fonction permet de compter le nombre de declaration dans la table dim_deces
    static async getNumberDecDeces() {
        let nbMa = await connection.promise().query("select count(id) as nombre from dim_dec_deces") ;
        console.log(nbMa[0][0].nombre);
       return nbMa[0][0].nombre ;
     }
}

module.exports = DecesService ;