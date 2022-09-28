
const getCecCode = (num_dec)=>{
    let cec_code = '';

    for (let i = 6; i < 12; i++) {
        cec_code  = cec_code +num_dec[i]
    }
    //console.log(cec_code);
    return cec_code;
}

//getCecCode("040104EN0100N00001")
module.exports = {getArrondissenementCodeOfMariage}