const express = require('express');
const router = express.Router();
const questionsController = require("../controllers/questionsController")


//-------------------------EVENTS ROUTES-------------------------

// -----Get ALL Events (GET):-----
router.get("/", questionsController.fetchAllQuestions)


// -----Get specific Event by ID (GET):-----
router.get("/:id", questionsController.fetchQuestion)

// -----Create a Event (POST):-----
router.post("/", questionsController.createQuestion)


// -----Update a specific Event (PUT):-----
router.put("/:id", questionsController.updateQuestion)


// -----Delete a specific Event (DELETE):-----
router.delete("/:id", questionsController.deleteQuestion)

module.exports = router;
