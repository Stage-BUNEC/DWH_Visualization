const express = require("express")
const router = express.Router()
let {getStatistique } = require("../controllers/naissanceController");

router.route("/dec_naiss").get(getStatistique) ;
router.route("/acte_genere_naiss").get(getStatistique);

module.exports = router ;