import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
    heading1: {
    type: String,
  },
  description: {
    type: String,
  },
  serviceimage: {
    type: String,
  }
});

export const ServiceModule = mongoose.model("servicedata", ServiceSchema);
