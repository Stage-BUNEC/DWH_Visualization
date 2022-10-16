
const getCecCode = (num_dec)=>{
    let cec_code = '';

    for (let i = 6; i < 12; i++) {
        cec_code  = cec_code +num_dec[i]
    }
    //console.log(cec_code);
    return cec_code;
}

const FormatMois=  (result)=>{
    
    result.forEach((elm)=>{
        if (elm.mois ==="01") {
            elm.mois = "Janvier"
        }else if (elm.mois === "02") {
            elm.mois = "Fevrier"
        }else if (elm.mois === "03") {
            elm.mois = "Mars"
        }else if (elm.mois === "04") {
            elm.mois = "Avril"
        }else if (elm.mois === "05") {
            elm.mois = "Mai"
        }else if (elm.mois === "06") {
            elm.mois = "Juin"
        }else if (elm.mois === "07") {
            elm.mois = "Juillet"
        }else if (elm.mois === "08") {
            elm.mois = "Aout"
        }else if (elm.mois === "09") {
            elm.mois = "Septembre"
        }else if (elm.mois === "10") {
            elm.mois = "Octobre"
        }else if (elm.mois === "11") {
            elm.mois = "Novembre"
        }else if (elm.mois === "12") {
            elm.mois = "Decembre"
        }
    })
    return result 
}

//getCecCode("040104EN0100N00001")
module.exports = {getCecCode , FormatMois}