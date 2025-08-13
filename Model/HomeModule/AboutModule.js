import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
   heading1: {
    type: String,
  },
  description: {
    type: String,
  },
  aboutimage1: {
    type: String,
  },
  aboutimage2: {
    type: String,
  },
    aboutimage3: {
    type: String,
  },
});

export const AboutModule = mongoose.model("aboutdata", AboutSchema);
