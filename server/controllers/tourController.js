import Tour from "../models/Tour.js";

// GET all tours (or by category)
export const getTours = async (req, res) => {
  try {
    const { category } = req.query;
    const tours = category ? await Tour.find({ category }) : await Tour.find();
    res.status(200).json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new tour
export const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    await newTour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
