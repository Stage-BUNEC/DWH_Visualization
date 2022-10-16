let connection = require('../config/db');
class Vis_decService{

//permet de recuperer les  dates de naissance par mois
    static  getNaissanceByMois=((callback)=>{
        let query = "select mois , count(mois) as Nombre from dim_date_naissance group by mois"
        connection.query(query , (error , result)=>{
            if (error) throw Error("Erreur lors de la recuperation des données vers la dimension de date de naissance")
             callback(result)
        })
    })


    // permet d avoir le nombre d acte genere par sexe et aggrege par region departement arron et CEC
   static async getWork() {
    let resultInfo = connection.promise().query("select mois from dim_date_naissance limit 1");
    console.log(resultInfo)
    return resultInfo;
 }
}


module.exports = Vis_decService ;