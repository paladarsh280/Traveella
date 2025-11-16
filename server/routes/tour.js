const express = require("express");
const { getTours, createTour } = require("../controllers/tourController");

const router = express.Router();

// GET all tours
router.get("/", getTours);

// POST new tour
router.post("/", createTour);

module.exports = router;
