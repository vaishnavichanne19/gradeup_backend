import express from "express"
import multer, { diskStorage } from "multer";
import path from "path"
import { loginValidation, signupValidation } from "../Middlewares/AuthValidation.js";
import { Login, Signup } from "../Controller/LoginApi.js";
import { CreateBanner, CreateChooseUs, CreateFAQ, CreateFirstStep, CreateFooter, CreateLevelUp, CreateNoCount, CreateQuestionPaper, CreateStartPracticing, CreateSuccessStory, DeleteBanner, DeleteChooseUs, DeleteFAQ, DeleteFirstStep, DeleteNoCount, DeleteStartPracticing, DeleteSuccessStory, GetallBanner, GetallChooseUs, GetallFAQ, GetallFirstStep, GetallFooter, GetallLevelUp, GetallNoCount, GetallQuestionPaper, GetallStartPracticing, GetallSuccessStory, GetoneBanner, GetoneChooseUs, GetoneFAQ, GetoneFirstStep, GetoneFooter, GetoneLevelUp, GetoneNoCount, GetoneQuestionPaper, GetoneStartPracticing, GetoneSuccessStory, UpdateBanner, UpdateChooseUs, UpdateFAQ, UpdateFirstStep, UpdateFooter, UpdateLevelUp, UpdateNoCount, UpdateQuestionPaper, UpdateStartPracticing, UpdateSuccessStory } from "../Controller/HomeApi/BannerApi.js";
import { CreateAbout, GetallAbout, GetoneAbout, UpdateAbout } from "../Controller/HomeApi/AboutApi.js";
import { CreateService, GetallService, GetoneService, UpdateService } from "../Controller/HomeApi/ServiceApi.js";
import { CreateBlog, DeleteBlog, GetallBlog, GetoneBlog, PublishBlog, UpdateBlog } from "../Controller/HomeApi/BlogApi.js";
import { CreateContact, CreateContactForm, DeleteContact, DeleteContactForm, GetallContact, GetallContactForm, GetoneContact, UpdateContact } from "../Controller/HomeApi/ContactApi.js";
import { CreateBoard, CreateClass, CreateEntranceExam, CreateExamPdf, CreateExamSubject, CreatePdf, CreatePracticepdf, CreateSubject, CreateTest, DeleteBoard, DeleteClass, DeleteEntranceExam, DeleteExamPdf, DeleteExamSubject, DeletePdf, DeletePracticePdf, DeleteSubject, GetallBoard, GetallClass, GetallEntranceExam, GetallExamPdf, GetallExamSubject, GetallExamSubjectforWebsite, GetallPdf, GetallPracticepdf, GetallSubject, GetallSubjectforWebsite, GetallTest, GetoneBoard, GetoneClass, GetoneEntranceExam, GetoneExamPdf, GetoneExamSubject, GetonePdf, GetonePracticepdf, GetoneSubject, GetoneTest, UpdateBoard, UpdateClass, UpdateEntranceExam, UpdateExamPdf, UpdateExamSubject, UpdatePdf, UpdatePracticepdf, UpdateSubject, UpdateTest } from "../Controller/HomeApi/TestApi.js";

// image validation 
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const imageFileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpg", "image/jpeg", "image/png", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files (JPG, JPEG, PNG, WEBP) are allowed."), false);
  }
};

export const uploadImages = multer({
  storage: imageStorage,
  fileFilter: imageFileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB max
});

// files validation 
const filestorage = multer.diskStorage({
 destination: (req, file, cb) => {
    cb(null, "./files/"); 
  },
  filename: (req, file, cb) => {
     const uniqueName = Date.now() + "_" + file.originalname;
    cb(null, uniqueName);
    req.originalFilename = file.originalname; 
  }
});

const pdfsFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

export const uploadFiles = multer({
  storage: filestorage,
  fileFilter: pdfsFilter,
  limits: { fileSize: 50 * 1024 * 1024 }, 
});
  
  const Route = express.Router();
  //login route
 Route.post("/signup", signupValidation, Signup);
 Route.post("/login", loginValidation, Login) 

/*********************************
Banner Route
 *********************************/
Route.post("/createbanner", uploadImages.fields([{name:"bannerimage1"}, {name:"bannerimage2" }]), CreateBanner);
Route.get("/getbanner", GetallBanner);
Route.get("/getone/:id", GetoneBanner);
Route.put("/updatebanner/:id", uploadImages.fields([{ name:"bannerimage1"}, {name:"bannerimage2"  }]), UpdateBanner)
Route.delete("/deletebanner/:id", DeleteBanner);

/*********************************
Start Practicing Route
 *********************************/
Route.post("/createstartpracticing", uploadImages.fields([{name:"startimage1"}, {name:"startimage2" }, {name:"startimage3" } ]), CreateStartPracticing);
Route.get("/getstartpracticing", GetallStartPracticing);
Route.get("/getstartpracticingbyid/:id", GetoneStartPracticing);
Route.put("/updatestartpracticing/:id", uploadImages.fields([{ name:"startimage1"}, {name:"startimage2" }, {name:"startimage3" } ]), UpdateStartPracticing)
Route.delete("/deletestartpracticing/:id", DeleteStartPracticing);

/*********************************
NoCount Route
 *********************************/
Route.post("/createcount", CreateNoCount);
Route.get("/getcount", GetallNoCount);
Route.get("/getcountbyid/:id", GetoneNoCount);
Route.put("/updatecount/:id", UpdateNoCount)
Route.delete("/deletecount/:id", DeleteNoCount);

/*********************************
ChooseUs Route
 *********************************/
Route.post("/createchooseus", CreateChooseUs);
Route.get("/getchooseus", GetallChooseUs);
Route.get("/getchooseusbyid/:id", GetoneChooseUs);
Route.put("/updatechooseus/:id", UpdateChooseUs)
Route.delete("/deletechooseus/:id", DeleteChooseUs);

/*********************************
Question paper Route
 *********************************/
Route.post("/createquestionpaper", uploadImages.single("qustionpaperimage"), CreateQuestionPaper);
Route.get("/getquestionpaper", GetallQuestionPaper);
Route.get("/getquestionpaperid/:id", GetoneQuestionPaper);
Route.put("/updatequestionpaper/:id", uploadImages.fields([{ name:"qustionpaperimage"}]), UpdateQuestionPaper);

/*********************************
Level up Route
 *********************************/
Route.post("/createlevelup", uploadImages.fields([{name:"levelupimage1"}, {name:"levelupimage2" }, {name:"logo"}]), CreateLevelUp);
Route.get("/getlevelup", GetallLevelUp);
Route.get("/getlevelupid/:id", GetoneLevelUp);
Route.put("/updatelevelup/:id", uploadImages.fields([{ name:"levelupimage1"}, {name:"levelupimage2" }, {name:"logo"}]), UpdateLevelUp)

/*********************************
First Step Route
 *********************************/
Route.post("/createfirststep", uploadImages.single("firststepimage"), CreateFirstStep);
Route.get("/getfirststep", GetallFirstStep);
Route.get("/getfirststepid/:id", GetoneFirstStep);
Route.put("/updatefirststep/:id", uploadImages.fields([{ name:"firststepimage"}]), UpdateFirstStep);
Route.delete("/deletefirststep/:id", DeleteFirstStep);

/*********************************
FAQ Route
 *********************************/
Route.post("/createfaq", CreateFAQ);
Route.get("/getfaq", GetallFAQ);
Route.get("/getfaqbyid/:id", GetoneFAQ);
Route.put("/updatefaq/:id", UpdateFAQ)
Route.delete("/deletefaq/:id", DeleteFAQ);

/*********************************
Success Story Route
 *********************************/
Route.post("/createsuccessstory", uploadImages.single("successstoryimage"), CreateSuccessStory);
Route.get("/getsuccessstory", GetallSuccessStory);
Route.get("/getsuccessstoryid/:id", GetoneSuccessStory);
Route.put("/updatesuccessstory/:id", uploadImages.fields([{ name:"successstoryimage"}]), UpdateSuccessStory);
Route.delete("/deletesuccessstory/:id", DeleteSuccessStory);

/*********************************
About Route
 *********************************/
Route.post("/createabout", uploadImages.fields([{name:"aboutimage1"}, {name:"aboutimage2" }, {name:"aboutimage3" } ]), CreateAbout);
Route.get("/getabout", GetallAbout);
Route.get("/getaboutbyid/:id", GetoneAbout);
Route.put("/updateabout/:id", uploadImages.fields([{ name:"aboutimage1"}, {name:"aboutimage2" }, {name:"aboutimage3" } ]), UpdateAbout);


/*********************************
Service Route
 *********************************/
Route.post("/createservice", uploadImages.single("serviceimage"), CreateService);
Route.get("/getservice", GetallService);
Route.get("/getservicebyid/:id", GetoneService);
Route.put("/updateservice/:id", uploadImages.fields([{ name:"serviceimage"}]), UpdateService);

/*********************************
Blog Route
 *********************************/
Route.post("/createblog", uploadImages.single("blogimage"), CreateBlog);
Route.get("/getblog", GetallBlog);
Route.get("/getblogbyid/:id", GetoneBlog);
Route.put("/updateblog/:id", uploadImages.fields([{ name:"blogimage"}]), UpdateBlog);
Route.delete("/deleteblog/:id", DeleteBlog);
Route.put("/createblog/:id/publish", PublishBlog);

/*********************************
Contact Route
 *********************************/
Route.post("/createcontact", CreateContact);
Route.get("/getcontact", GetallContact);
Route.get("/getcontactbyid/:id", GetoneContact);
Route.put("/updatecontact/:id", UpdateContact)
Route.delete("/deletecontact/:id", DeleteContact);

/*********************************
Contact Form Route
 *********************************/
Route.post("/createcontactform", CreateContactForm);
Route.get("/getcontactform", GetallContactForm);
Route.delete("/deletecontactform/:id", DeleteContactForm);

/*********************************
Test Route
 *********************************/
Route.post("/createtest", uploadImages.single("testimage"), CreateTest);
Route.get("/gettest", GetallTest);
Route.get("/gettestbyid/:id", GetoneTest);
Route.put("/updatetest/:id", uploadImages.fields([{ name:"testimage"}]), UpdateTest);

/*********************************
Board Route
 *********************************/
Route.post("/createboard", CreateBoard);
Route.get("/getboard", GetallBoard);
Route.get("/getboardid/:id", GetoneBoard);
Route.put("/updateboard/:id", UpdateBoard);
Route.delete("/deleteboard/:id", DeleteBoard)

/*********************************
Class Route
 *********************************/
Route.post("/createclass", CreateClass);
Route.get("/getclass", GetallClass);
Route.get("/getclassid/:id", GetoneClass);
Route.put("/updateclass/:id", UpdateClass);
Route.delete("/deleteclass/:id", DeleteClass)

/*********************************
Subject Route
 *********************************/
Route.post("/createsubject", CreateSubject);
Route.get("/getsubject/:classId", GetallSubjectforWebsite);
Route.get("/getallsubject", GetallSubject);
Route.get("/getsubjectid/:id", GetoneSubject);
Route.put("/updatesubject/:id", UpdateSubject);
Route.delete("/deletesubject/:id", DeleteSubject)

/*********************************
Pdf Route
 *********************************/
Route.post("/createpdf", uploadFiles.single("pdfname"), CreatePdf);
Route.get("/getpdf", GetallPdf);
Route.get("/getpdfid/:id", GetonePdf);
Route.put("/updatepdf/:id", uploadFiles.fields([{ name:"pdfname"}]), UpdatePdf);
Route.delete("/deletepdf/:id", DeletePdf)

/*********************************
Practice Pdf Route
 *********************************/
Route.post("/createpracticepdf", uploadFiles.single("practicepdf"), CreatePracticepdf);
Route.get("/getpracticepdf", GetallPracticepdf);
Route.get("/getpracticepdfid/:id", GetonePracticepdf);
Route.put("/updatepracticepdf/:id", uploadFiles.fields([{ name:"practicepdf"}]), UpdatePracticepdf);
Route.delete("/deletepracticepdf/:id", DeletePracticePdf);

/*********************************
Entrance Exam Route
 *********************************/
Route.post("/createexam", CreateEntranceExam);
Route.get("/getexam", GetallEntranceExam);
Route.get("/getexambyid/:id", GetoneEntranceExam);
Route.put("/updateexam/:id", UpdateEntranceExam);
Route.delete("/deleteexam/:id", DeleteEntranceExam);

/*********************************
Exam Subject Route
 *********************************/
Route.post("/createexamsubject", CreateExamSubject);
Route.get("/getexamsubject/:entranceexamId", GetallExamSubjectforWebsite);
Route.get("/getallexamsubject", GetallExamSubject);
Route.get("/getexamsubjectid/:id", GetoneExamSubject);
Route.put("/updateexamsubject/:id", UpdateExamSubject);
Route.delete("/deleteexamsubject/:id", DeleteExamSubject)

/*********************************
Exam Pdf Route
 *********************************/
Route.post("/createexampdf", uploadFiles.single("pdfname"), CreateExamPdf);
Route.get("/getexampdf", GetallExamPdf);
Route.get("/getexampdfid/:id", GetoneExamPdf);
Route.put("/updateexampdf/:id", uploadFiles.fields([{ name:"pdfname"}]), UpdateExamPdf);
Route.delete("/deleteexampdf/:id", DeleteExamPdf)

/*********************************
Footer Route
 *********************************/
Route.post("/createFooter", CreateFooter);
Route.get("/getFooter", GetallFooter);
Route.get("/getFooterbyid/:id", GetoneFooter);
Route.put("/updateFooter/:id", UpdateFooter)

export default Route;