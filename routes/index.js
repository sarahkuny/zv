const express = require("express");
const router = express.Router();
const db = require("../model/helper");


router.use(express.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("route works");
});

module.exports = router;
