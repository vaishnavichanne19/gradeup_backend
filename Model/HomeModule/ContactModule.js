import mongoose from "mongoose";

const Contactchema = new mongoose.Schema({
  heading: {
    type: String,
  },
   heading1: {
    type: String,
  },
    icon: {
    type: String,
  },
  description: {
    type: String,
  }
})

const ContactFormSchema = new mongoose.Schema({
  fname: {
    type: String
  },
    email: {
    type: String
  },
    category: {
    type: String
  },
    number: {
    type: Number
  },
    msg: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

export const ContactModule = mongoose.model("contactdata", Contactchema);
export const ContactForm = mongoose.model("contact-form", ContactFormSchema)