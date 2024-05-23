const Sport = require('../models/sport')


//Note that the methods are referenced in our main index.js file!

// -----Get ALL Notes (GET):
const fetchAllSports  = async (req, res) => {

    //1. Get all notes from the DB:
    const sports = await Sport.find();

    //2. Send the notes back as a response:
    res.json({sports: sports})
}

// -----Get specific Notes by ID (GET):
const fetchSport = async (req, res) => {

    //1. Get our ID off the URL:
    const sportID = req.params.id

    //2. Find the specific note using that ID:
    const sport = await Sport.findById(sportID)

    //3. Send response with that Note as the payload
    res.json({sport: sport})
}


// -----Create a Note (POST):
const createSport = async (req, res) => {
    console.log(`BODY: ${req.body}`)
    //1. Get data from req.body:

    // const title = req.body.title
    // const body = req.body.body
    const {title,body, picture} = req.body //This is the same as writing the 2 lines above!
    
    //2. Create the note:
    const sport = await Sport.create({
        title,
        body,
        picture
    })
    
    //3. Respond with new copy of note
    res.json({sport: sport})
}


// -----Update a specific note
const updateSport = async (req, res) => {

    //1. Get the ID off the URL:
    const sportId = req.params.id

    //2. Get the data off the ID:
    const {title,body,picture} = req.body

        //3. Find and update Note:
        const updatedSport = await Sport.findByIdAndUpdate(sportId, {
            title,
            body,
            picture
        })

        //4. Retrieve updated note and send it as a response:
        res.json({sport: updatedSport})
}

// -----Delete a specific note:
const deleteSport = async (req, res) => {

    //1. Get the ID off the URL:
    const sportId = req.params.id

    //2. Delete the record:
    const deletedSport = await Sport.findByIdAndDelete(sportId);

    //3. Send response:
    res.json({ message: "Sport was deleted" });
}


module.exports = {
    fetchAllSports,
    fetchSport,
    createSport,
    updateSport,
    deleteSport
}