const express = require("express")
const router = express.Router()
let {getStatistique , decNaissance } = require("../controllers/naissanceController");

router.route("/dec_naiss").get(decNaissance) ;
router.route("/acte_genere_naiss").get(getStatistique);

module.exports = router ;