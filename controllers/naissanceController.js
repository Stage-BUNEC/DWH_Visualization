let NaissanceService = require("../services/naissanceService");


const getStatistique = async (req, res) => {
        let sexe = [], datapro = [] ,Nb_dec,mere_nat,pere_nat, Nb_arch, fosa, sexePorption = [],sexePorptionGenere = [], pere_travail = 0, hors_mariage = 0, pere_sans_travail = 0, date_mjr ,plotMartri ,statutGenere;
        await NaissanceService.getNumberNai((result) => {
                sexe = result;
        })
        await NaissanceService.getNumberDecNais((result) => {
                Nb_dec = result;
        })

        await NaissanceService.getNumberArchiveSiege((result) => {
                Nb_arch = result;
        })
        await NaissanceService.getSexeProportion((result) => {
                result.forEach(element => {
                        if (element.sexe === "M") {
                                sexePorption.push({ sexe: "Masculin", "Nombre": element.Nombre })
                        } else {
                                sexePorption.push({ sexe: element.sexe, "Nombre": element.Nombre })
                        }
                });
        })
          
        await NaissanceService.getSexeProportionGenere((result) => {
                result.forEach(element => {
                        if (element.sexe === "M") {
                                sexePorptionGenere.push({ sexe: "Masculin", "Nombre": element.Nombre })
                        } else {
                                sexePorptionGenere.push({ sexe: element.sexe, "Nombre": element.Nombre })
                        }
                });
        })

        await NaissanceService.getProfessionPere((result) => {
                result.forEach((elm) => {
                        //   console.log(elm)
                        if (elm.profession_pere === "") pere_sans_travail += 1;
                        else {
                                pere_travail += 1;
                        }
                })
        })
        let cel = 0;
        await NaissanceService.getStatutMatrimoniale((result) => {
                result.forEach((elm) => {
                        // console.log(elm)
                        if (elm.situation_matrimoniale_mere === null) hors_mariage += 1;
                        else {
                                cel += 1;
                        }
                })
        })

       await NaissanceService.getNumberDecFosa((result) => {
                if (result.length == 1) {
                        fosa = result[0].nombre
                }
        })
       await NaissanceService.getStatutMatrimoniale((result)=>{
               // console.log(result)
                hors_mariage = result[0].nombre
        })

      await  NaissanceService.plotStatusMatrimonial((result)=>{
               // console.log(result)
                plotMartri = result
        })

      await NaissanceService.getNationnaliteMere((result)=>{
        mere_nat = result
        console.log(result)
      })
      await NaissanceService.getNationnalitePere((result)=>{
        pere_nat = result
        console.log(result)
      })
        await NaissanceService.getNumCEC();

      await  NaissanceService.getTimeLoadingEtl((resultat) => {
                date_mjr = new Date(resultat[0].date_ajout);
        })
       
        await NaissanceService.getStatusGenere((resultat)=>{
               // console.log(resultat)
                statutGenere = resultat
        })
        await NaissanceService.getInfoActeGenere((resultat)=>{
                // console.log(resultat)
                datapro = resultat
         })
 
        let data = await NaissanceService.getInfo()
       // let  datapro = await NaissanceService.getInfoActeGenere()
        // console.log("nb per_san"+pere_sans_travail ,"per_avec" + pere_travail);
        res.render("pages/naissance/naissance_gene", {
                "data": data[0],
                "entity_name": "Tableau d 'acte de naissance génére",
                "Nombre_sexe": sexe,
                "nombre_dec": Nb_dec[0].Nombre,
                "archive": Nb_arch[0].Nombre,
                "sexePorption": sexePorption,
                "pere_s_p": pere_sans_travail,
                "pere_a_p": pere_travail,
                "hors_mariage": hors_mariage,
                "date": date_mjr.toLocaleDateString(),
                "heure": date_mjr.toLocaleTimeString(),
                "fosa": fosa ,
                "plotMatri" : plotMartri,
                "statutGenere":statutGenere,
                "sexePorptionGenere": sexePorptionGenere,
                "datapro" : datapro , 
                "mere_nat":mere_nat,
                "pere_nat":pere_nat
        })
}

const decNaissance = ((req, res) => {
        res.render("pages/naissance/declaration")
})
module.exports = {
        getStatistique,
        decNaissance
}