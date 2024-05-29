const express = require('express');
const router = express.Router();
const sportsController = require("../controllers/sportsController")


//-------------------------Sports ROUTES-------------------------

// -----Get ALL Sports (GET):-----
router.get("/", sportsController.fetchAllSports)


// -----Get specific Sport by ID (GET):-----
router.get("/:id", sportsController.fetchSport)

// -----Create a Sport (POST):-----
router.post("/", sportsController.createSport)


// -----Update a specific Sport (PUT):-----
router.put("/:id", sportsController.updateSport)


// -----Delete a specific Sport (DELETE):-----
router.delete("/:id", sportsController.deleteSport)

module.exports = router;