import mongoose from "mongoose";
import { type } from "os";

const BannerSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
    heading1: {
    type: String,
  },
  description: {
    type: String,
  },
  bannerimage1: {
    type: String,
  },
  bannerimage2: {
    type: String,
  },
});

const startpracticingSchema = new mongoose.Schema({
   heading: {
    type: String,
  },
    para1: {
    type: String
  },
   heading1: {
    type: String,
  },
   startimage1: {
    type: String,
  },
  startimage2: {
    type: String,
  },
    startimage3: {
    type: String,
  },
})

const nocountSchema = new mongoose.Schema({
  countnumber: {
    type: String
  },
  title: {
   type: String
  }
})

const chooseusSchema = new mongoose.Schema({
  heading: {
    type: String
  },
    heading1: {
    type: String
  },
  point: {
    type: String
  },
})

const qustionpaperSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
    heading1: {
    type: String,
  },
  description: {
    type: String,
  },
  qustionpaperimage: {
    type: String,
  },
});

const LevelUpSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
    heading1: {
    type: String,
  },
  levelupimage1: {
    type: String,
  },
  levelupimage2: {
    type: String,
  },
      logo: {
    type: String,
  },
});

const FirststepSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
      heading1: {
    type: String,
  },
    description: {
    type: String,
  },
    title: {
    type: String,
  },
  firststepimage: {
    type: String,
  },
});

const faqSchema = new mongoose.Schema({
  mainheading: {
    type: String,
  },
    heading1: {
    type: String,
  },
        subheading1: {
    type: String,
  },
      heading2: {
    type: String,
  },
        subheading2: {
    type: String,
  },
    title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const SuccessstorySchema = new mongoose.Schema({
  heading: {
    type: String,
  },
      heading1: {
    type: String,
  },
  successstoryimage: {
    type: String,
  }
});

const FooterSchema = new mongoose.Schema({
  description: {
    type: String
  }
})

export const Banner = mongoose.model("banner", BannerSchema);
export const StartPracticing = mongoose.model("startpracticing", startpracticingSchema);
export const NoCount = mongoose.model("count", nocountSchema);
export const ChooseUs = mongoose.model("chooseus", chooseusSchema);
export const QuestionPaper = mongoose.model("questionpaper", qustionpaperSchema)
export const LevelUp = mongoose.model("levelup", LevelUpSchema);
export const FirstStep = mongoose.model("firststep", FirststepSchema)
export const FAQ = mongoose.model("faq", faqSchema);
export const SuccessStory = mongoose.model("success-story", SuccessstorySchema)
export const FooterModule = mongoose.model("footer-data", FooterSchema)