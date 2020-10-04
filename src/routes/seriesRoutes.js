const express = require("express");
const router = express.Router();
const controller = require("../controller/seriesController");

router.get("/series", controller.getAll);
router.get("/series/:id", controller.getByID);
router.get("/broadcasters", controller.getAllBroadcasts);
router.get("/broadcasters/:broadcaster", controller.getByBroadcast);

module.exports = router;