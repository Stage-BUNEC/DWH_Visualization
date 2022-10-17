let connection = require('../config/db');
class Vis_decService{

//permet de recuperer les  dates de naissance par mois
    static  getNaissanceByMois=((callback)=>{
        let query = "select mois , count(mois) as Nombre from dim_date_naissance group by mois order by mois asc"
        connection.query(query , (error , result)=>{
            if (error) throw Error("Erreur lors de la recuperation des données vers la dimension de date de naissance")
             callback(result)
        })
    })

    //permet de recuperer le nombre de naissance par an
   static  getNaissanceByYear=((callback)=>{
    let query = "select annee , count(annee) as Nombre from dim_date_naissance    group by annee   order by annee asc"
    connection.query(query , (error , result)=>{
        if (error) throw Error("Erreur lors de la recuperation des données vers la dimension de date de naissance ")
         callback(result)
    })
})


    
   static async getWork() {
    let resultInfo = connection.promise().query("select mois from dim_date_naissance limit 1");
    return resultInfo;
 }
}


module.exports = Vis_decService ;