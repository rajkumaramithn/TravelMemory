const express = require('express');
const router = express.Router();

const tripController = require('../controllers/trip.controller');


// Create a new trip
router.post('/', async (req, res) => {
  try {
    const result = await tripController.tripAdditionController(req, res);
    return result;
  } catch (error) {
    console.error('Error creating trip:', error.message);
    res.status(500).json({ error: 'Failed to create trip' });
  }
});


// Get all trips
router.get('/', async (req, res) => {
  try {
    const result = await tripController.getTripDetailsController(req, res);
    return result;
  } catch (error) {
    console.error('Error fetching trips:', error.message);
    res.status(500).json({ error: 'Failed to fetch trips' });
  }
});


// Get trip by ID
router.get('/:id', async (req, res) => {
  try {
    const result = await tripController.getTripDetailsByIdController(req, res);
    return result;
  } catch (error) {
    console.error('Error fetching trip by ID:', error.message);
    res.status(500).json({ error: 'Failed to fetch trip' });
  }
});


module.exports = router;
