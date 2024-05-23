const Question = require('../models/question')


//Note that the methods are referenced in our main server.js file!

// -----Get ALL Events (GET):
const fetchAllQuestions = async (req, res) => {

    //1. Get all notes from the DB:
    const questions = await Question.find();

    //2. Send the notes back as a response:
    res.json({questions: questions })
}

// -----Get specific Notes by ID (GET):
const fetchQuestion = async (req, res) => {

    //1. Get our ID off the URL:
    const questionID = req.params.id

    //2. Find the specific note using that ID:
    const question = await Question.findById(questionID)

    //3. Send response with that Note as the payload
    res.json({question: question})
}


// -----Create a Note (POST):
const createQuestion = async (req, res) => {
    console.log(`BODY: ${req.body}`)
    //1. Get data from req.body:

    // const title = req.body.title
    // const body = req.body.body
    const {  body } = req.body //This is the same as writing the 2 lines above!
    
    //2. Create the note:
    const question = await Question.create({ 
        body,
    })
    
    //3. Respond with new copy of note
    res.json({question: question})
}


// -----Update a specific note
const updateQuestion = async (req, res) => {

    //1. Get the ID off the URL:
    const questionId = req.params.id

    //2. Get the data off the ID:
    const {body} = req.body

        //3. Find and update Note:
        const updatedQuestion = await Question.findByIdAndUpdate(questionId, { 
            body,
        })

        //4. Retrieve updated note and send it as a response:
        res.json({event: updatedQuestion})
}

// -----Delete a specific note:
const deleteQuestion = async (req, res) => {

    //1. Get the ID off the URL:
    const questionId = req.params.id

    //2. Delete the record:
    const deletedQuestion = await Question.findByIdAndDelete(questionId);

    //3. Send response:
    res.json({ message: "Question was deleted" });
}


module.exports = {
    fetchAllQuestions,
    fetchQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion
}
