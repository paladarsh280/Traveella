import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  image: { type: String, required: true },
  duration: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  price: { type: String, required: true },
  category: { 
    type: String, 
    enum: ["backpacking", "solo", "couple", "luxurious", "co-travel", "trekking"], 
    required: true 
  },
});

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
