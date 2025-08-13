import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
   heading1: {
    type: String,
  },
  description: {
    type: String,
  },
  blogimage: {
    type: String,
  },
  date: {
    type: String
  },
  blogdetail: {
    type: String
  },
  publish: {
    type: Boolean,
    default: false
  }
});

export const BlogModule = mongoose.model("blogdata", BlogSchema);
