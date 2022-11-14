const express = require("express")
const router = express.Router()
let {getStatistique , decNaissance , naissanceGenereTable} = require("../controllers/naissanceController");

router.route("/dec_naiss").get(decNaissance) ;
router.route("/acte_genere_naiss").get(getStatistique);
router.route("/genereNaissanceTable").get(naissanceGenereTable)

router.route("/").get(getStatistique);
module.exports = router ;