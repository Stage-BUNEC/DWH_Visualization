const express = require("express")
const router = express.Router()


let {getStatistique} = require("../controllers/decesController")

router.route("/deces").get(getStatistique) ; //permet de retourner la tableau des mariages

module.exports = router ;