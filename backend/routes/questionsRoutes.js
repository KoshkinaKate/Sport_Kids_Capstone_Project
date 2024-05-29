const express = require('express');
const router = express.Router();
const questionsController = require("../controllers/questionsController")


//-------------------------Questions ROUTES-------------------------

// -----Get ALL Questions (GET):-----
router.get("/", questionsController.fetchAllQuestions)


// -----Get specific Question by ID (GET):-----
router.get("/:id", questionsController.fetchQuestion)

// -----Create a Question (POST):-----
router.post("/", questionsController.createQuestion)


// -----Update a specific Question (PUT):-----
router.put("/:id", questionsController.updateQuestion)


// -----Delete a specific Question (DELETE):-----
router.delete("/:id", questionsController.deleteQuestion)

module.exports = router;
