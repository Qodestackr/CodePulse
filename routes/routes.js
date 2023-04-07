const express = require("express")
const router = express.Router()


// controllers
const indexController = require("../controllers/indexController");
const postCodeController = require("../controllers/postCodeController");

router.get("/", indexController)
router.post("/code", postCodeController);

module.exports = router