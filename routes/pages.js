const express = require('express');
const router = express.Router();
const { Registrations } = require('../models');



router.get('/', async(req,res) => {
    const userData = await Registrations.findAll(); 
    res.json(userData);
})

router.post('/', async (req, res) => {
  try {
    // This is where you use your try-catch
    const registration = await Registrations.create(req.body);
    res.json(registration); // return created registration
  } catch (err) {
    console.error(err);                 // log full error in console
    res.status(500).send(err.message); // send just the error message to client
  }
});

module.exports = router;