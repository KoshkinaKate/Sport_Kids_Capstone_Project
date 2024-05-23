const express = require('express');
const router = express.Router();
const sportsController = require("../controllers/sportsController")


//-------------------------NOTES ROUTES-------------------------

// -----Get ALL Notes (GET):-----
router.get("/", sportsController.fetchAllSports)


// -----Get specific Notes by ID (GET):-----
router.get("/:id", sportsController.fetchSport)

// -----Create a Note (POST):-----
router.post("/", sportsController.createSport)


// -----Update a specific note (PUT):-----
router.put("/:id", sportsController.updateSport)


// -----Delete a specific note (DELETE):-----
router.delete("/:id", sportsController.deleteSport)

module.exports = router;