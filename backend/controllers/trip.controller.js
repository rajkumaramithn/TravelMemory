const Trip = require('../models/trip.model');


// ➕ ADD TRIP
async function tripAdditionController(req, res) {
    try {
        console.log("Incoming data:", req.body);

        const {image, tripName, tripType, shortDescription, featured } = req.body;

        // Basic validation
        if (!tripName || !tripType || !shortDescription) {
            return res.status(400).json({ error: "Missing required fields" });
        }

const tripDetail = new Trip({
  tripName,
  tripType,
  shortDescription,
  featured: featured || false,
  image: image || ""
});

        const savedTrip = await tripDetail.save();

        res.status(201).json(savedTrip);

    } catch (error) {
        console.error("ERROR:", error.message);
        res.status(500).json({ error: error.message });
    }
}


// 📥 GET ALL TRIPS
async function getTripDetailsController(req, res) {
    try {
        const trips = await Trip.find().sort({ createdAt: -1 });
        res.json(trips);
    } catch (error) {
        console.error("ERROR:", error.message);
        res.status(500).json({ error: error.message });
    }
}


// 🔍 GET TRIP BY ID
async function getTripDetailsByIdController(req, res) {
    try {
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({ error: "Trip not found" });
        }

        res.json(trip);

    } catch (error) {
        console.error("ERROR:", error.message);
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    tripAdditionController,
    getTripDetailsController,
    getTripDetailsByIdController
};
