import mongoose from "mongoose";

const TestSchema = mongoose.Schema({
  heading: {
    type: String,
  },
  heading1: {
    type: String,
  },
  description: {
    type: String,
  },
  //     testimage: {
  //     type: String
  // },
});

const BoardSchema = mongoose.Schema({
  boardname: {
    type: String,
    unique: true,
  },
});

const ClassSchema = mongoose.Schema({
  boardref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "boarddata",
  },
  classname: {
    type: String,
  },
});

const SubjectSchema = mongoose.Schema({
  classref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classdata",
  },
  subjectname: {
    type: String,
  },
});

const PdfSchema = mongoose.Schema({
  subjectref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subjectdata",
  },
  pdfname: {
    type: String,
  },
});

const PracticepdfSchema = mongoose.Schema({
  heading: {
    type: String,
  },
  practicepdf: {
    type: String,
  },
});

const EntranceExamSchema = mongoose.Schema({
  heading: {
    type: String,
  },
  heading1: {
    type: String,
  },
  examname: {
    type: String,
  }
});

const EntranceExamSubjectSchema = mongoose.Schema({
  entranceexamref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "entrance-exam",
  },
  subjectname: {
    type: String,
  },
});

const EntranceExamPdfSchema = mongoose.Schema({
  examsubjectref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "entrance-exam-subject",
  },
  pdfname: {
    type: String,
  },
});

export const TestModule = mongoose.model("testdata", TestSchema);
export const BoardModule = mongoose.model("boarddata", BoardSchema);
export const ClassModule = mongoose.model("classdata", ClassSchema);
export const SubjectModule = mongoose.model("subjectdata", SubjectSchema);
export const PdfModule = mongoose.model("pdfdata", PdfSchema);
export const PracticePdf = mongoose.model("practicepdf", PracticepdfSchema);
export const EntranceExam = mongoose.model("entrance-exam", EntranceExamSchema);
export const EntranceExamSubject = mongoose.model("entrance-exam-subject", EntranceExamSubjectSchema);
export const EntranceExamPdf = mongoose.model("entrance-exam-pdf", EntranceExamPdfSchema);