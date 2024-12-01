const express = require("express");
const router = express.Router();
const patient = require("../models/patient");

// Add a new patient
router.post("/Patient", async (req, res) => {
    const { name, address, phonenumber,} = req.body;
    const newPatient = new patient({
      name,
      address,
      phonenumber,
    });
  
    try {
      const patient = await newPatient.save();
      res.send("Patient registered Successfully");
    } catch (error) {
      return res.status(400).json({ error });
    }
  });

  module.exports = router;