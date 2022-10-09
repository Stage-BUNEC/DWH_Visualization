let connection = require('../config/db');

class DecesService{

    //cette  fonction permet de compter le nombre de declaration dans la table dim_deces
    static getNumberDecNaissance(callback){
        connection.promise().query("select count(id) as nombre from dim_dec_deces" , (error,result)=>{
            if (error) throw error;
            callback(result);
        })
    }

    static async getNumberDecDeces() {
        let nbMa = await connection.promise().query("select count(id) as nombre from dim_dec_deces") ;
        console.log(nbMa[0][0].nombre);
       return nbMa[0][0].nombre ;
     }
}

module.exports = DecesService ;