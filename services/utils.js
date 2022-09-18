
const getArrondissenementCodeOfMariage = (num_dec)=>{
    let code_arrondissement = '';
    for (let i = 0; i < 5; i++) {
        code_arrondissement  = code_arrondissement +num_dec[i]
    }
    //console.log(code_arrondissement);
    return code_arrondissement;
}

module.exports = {getArrondissenementCodeOfMariage}