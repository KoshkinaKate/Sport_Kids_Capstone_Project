const Event = require('../models/event') //importing Event 


// Methods are referenced in our main server.js file

// -----Get ALL Events (GET):
const fetchAllEvents = async (req, res) => {

    //1. Get all events from the DB:
    const events = await Event.find();

    //2. Send the events back as a response: in json format
    res.json({events: events})
}

// -----Get specific Events by ID (GET):
const fetchEvent = async (req, res) => {

    //1. Get our ID off the URL:
    const eventID = req.params.id

    //2. Find the specific event using that ID:
    const event = await Event.findById(eventID)

    //3. Send response with that Event as the payload
    res.json({event: event})
}


// -----Create a Event (POST):
const createEvent = async (req, res) => {
    console.log(`BODY: ${req.body}`)
    //1. Get data from req.body:

    // const title = req.body.title
    // const body = req.body.body
    const {  title, body, startDate, endDate, location, status } = req.body //This is the same as writing the 2 lines above,it destrcutures
    
    //2. Create the event:
    const event = await Event.create({
        title,
        body,
        startDate,
        endDate,
        location,
        status
    })
    
    //3. Respond with new copy of event
    res.json({event: event})
}


// -----Update a specific event
const updateEvent = async (req, res) => {

    //1. Get the ID off the URL:
    const eventId = req.params.id

    //2. Get the data off the ID:
    const {title, body, startDate, endDate, location, status} = req.body

        //3. Find and update event:
        const updatedEvent = await Event.findByIdAndUpdate(eventId, {
            title,
            body,
            startDate,
            endDate,
            location,
            status
        })

        //4. Retrieve updated event and send it as a response:
        res.json({event: updatedEvent})
}

// -----Delete a specific event:
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