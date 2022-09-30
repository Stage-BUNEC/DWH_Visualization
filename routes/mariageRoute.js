const express = require("express")
const router = express.Router()
//let MariageController = require("../services/mariageService");
let {mariageInfo , getPublicationTable , getMariageTable } = require("../controllers/mariageController");

router.route("/").get(mariageInfo) ; //permet de retourner la tableau des mariages
router.route("/publication").get(getPublicationTable);
router.route("/mariagetable").get(getMariageTable)
module.exports = router ;