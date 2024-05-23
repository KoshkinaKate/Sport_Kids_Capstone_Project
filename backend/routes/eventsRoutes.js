const express = require('express');
const router = express.Router();
const eventsController = require("../controllers/eventsController")


//-------------------------EVENTS ROUTES-------------------------

// -----Get ALL Events (GET):-----
router.get("/", eventsController.fetchAllEvents)


// -----Get specific Event by ID (GET):-----
router.get("/:id", eventsController.fetchEvent)

// -----Create a Event (POST):-----
router.post("/", eventsController.createEvent)


// -----Update a specific Event (PUT):-----
router.put("/:id", eventsController.updateEvent)


// -----Delete a specific Event (DELETE):-----
router.delete("/:id", eventsController.deleteEvent)

module.exports = router;