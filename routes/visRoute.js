const express = require("express")
const router = express.Router()
let {getGraph } = require("../controllers/vis_decController");

router.route("/date_declaration").get(getGraph);

module.exports = router ;