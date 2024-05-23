const Event = require('../models/event')


//Note that the methods are referenced in our main server.js file!

// -----Get ALL Events (GET):
const fetchAllEvents = async (req, res) => {

    //1. Get all notes from the DB:
    const events = await Event.find();

    //2. Send the notes back as a response:
    res.json({events: events})
}

// -----Get specific Notes by ID (GET):
const fetchEvent = async (req, res) => {

    //1. Get our ID off the URL:
    const eventID = req.params.id

    //2. Find the specific note using that ID:
    const event = await Event.findById(eventID)

    //3. Send response with that Note as the payload
    res.json({event: event})
}


// -----Create a Note (POST):
const createEvent = async (req, res) => {
    console.log(`BODY: ${req.body}`)
    //1. Get data from req.body:

    // const title = req.body.title
    // const body = req.body.body
    const {  title, body, startDate, endDate, location, status } = req.body //This is the same as writing the 2 lines above!
    
    //2. Create the note:
    const event = await Event.create({
        title,
        body,
        startDate,
        endDate,
        location,
        status
    })
    
    //3. Respond with new copy of note
    res.json({event: event})
}


// -----Update a specific note
const updateEvent = async (req, res) => {

    //1. Get the ID off the URL:
    const eventId = req.params.id

    //2. Get the data off the ID:
    const {title, body, startDate, endDate, location, status} = req.body

        //3. Find and update Note:
        const updatedEvent = await Event.findByIdAndUpdate(eventId, {
            title,
            body,
            startDate,
            endDate,
            location,
            status
        })

        //4. Retrieve updated note and send it as a response:
        res.json({event: updatedEvent})
}

// -----Delete a specific note:
const deleteEvent = async (req, res) => {

    //1. Get the ID off the URL:
    const eventId = req.params.id

    //2. Delete the record:
    const deletedEvent = await Event.findByIdAndDelete(eventId);

    //3. Send response:
    res.json({ message: "Event was deleted" });
}


module.exports = {
    fetchAllEvents,
    fetchEvent,
    createEvent,
    updateEvent,
    deleteEvent
}