import {
  BoardModule,
  ClassModule,
  EntranceExam,
  EntranceExamPdf,
  EntranceExamSubject,
  PdfModule,
  PracticePdf,
  SubjectModule,
  TestModule,
} from "../../Model/HomeModule/TestModule.js";

/*********************
 Test Api 
 *********************/
export const CreateTest = async (req, res) => {
  try {
    const { heading, heading1, description } = req.body;
    // const testimage = req.file.filename;

    const TestData = new TestModule({
      heading,
      heading1,
      description,
      // testimage
    });

    await TestData.save();
    res.status(200).json({ msg: "Data added successfully", data: TestData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallTest = async (req, res) => {
  try {
    const userData = await TestModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneTest = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await TestModule.findById(id);

    if (!exitData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    // ✅ Add success: true and wrap data
    res.status(200).json({
      success: true,
      data: exitData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdateTest = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1, description } = req.body;

    const Dataupdate = {
      heading,
      heading1,
      description,
    };

    if (req.files && req.files.testimage) {
      Dataupdate.testimage = req.files.testimage[0].filename;
    }

    const existingData = await TestModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await TestModule.findByIdAndUpdate(id, Dataupdate, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedData,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
};

/*********************
Board Api 
 *********************/
export const CreateBoard = async (req, res) => {
  try {
    const { boardname } = req.body;

    const BoardData = new BoardModule({
      boardname,
    });

    await BoardData.save();
    res.status(200).json({ msg: "Data added successfully", data: BoardData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallBoard = async (req, res) => {
  try {
    const userData = await BoardModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneBoard = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await BoardModule.findById(id);

    if (!exitData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    res.status(200).json({
      success: true,
      data: exitData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdateBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const { boardname } = req.body;

    const Dataupdate = {
      boardname,
    };

    const existingData = await BoardModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await BoardModule.findByIdAndUpdate(id, Dataupdate, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedData,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
};

export const DeleteBoard = async (req, res) => {
  try {
    const id = req.params.id;
    const existData = await BoardModule.findById(id);

    if (!existData) {
      return res.status(404).json({ msg: "User Data not Find" });
    }

    await BoardModule.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*********************
Board Class Api 
 *********************/
export const CreateClass = async (req, res) => {
  try {
    const { boardId, classname } = req.body;

    const ClassData = new ClassModule({
      boardref: boardId,
      classname,
    });

    await ClassData.save();

    await ClassData.populate('boardref');
    
    res.status(200).json({ msg: "Data added successfully", data: ClassData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallClass = async (req, res) => {
  const boardId = req.query.boardId;
  try {
    const userData = boardId
    ? await ClassModule.find({ boardref: boardId }) 
    : await ClassModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneClass = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await ClassModule.findById(id);

    if (!exitData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    res.status(200).json({
      success: true,
      data: exitData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { classname } = req.body;

    const Dataupdate = {
      classname,
    };

    const existingData = await ClassModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await ClassModule.findByIdAndUpdate(id, Dataupdate, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedData,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
};

export const DeleteClass = async (req, res) => {
  try {
    const id = req.params.id;
    const existData = await ClassModule.findById(id);

    if (!existData) {
      return res.status(404).json({ msg: "User Data not Find" });
    }

    await ClassModule.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*********************
Board Class Subject Api 
 *********************/
export const CreateSubject = async (req, res) => {
  try {
    const { classId, subjectname } = req.body;

    const SubjectData = new SubjectModule({
      classref: classId,
      subjectname,
    });

    await SubjectData.save();
    res.status(200).json({ msg: "Data added successfully", data: SubjectData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallSubjectforWebsite = async (req, res) => {
  const classId = req.params.classId;
  try {
    const userData = classId
    ? await SubjectModule.find({ classref: classId }) 
    : await SubjectModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const GetallSubject = async (req, res) => {
  const classId = req.query.classId;
  try {
    const userData = classId
    ? await SubjectModule.find({ classref: classId }) 
    : await SubjectModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const GetoneSubject = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await SubjectModule.findById(id);

    if (!exitData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    res.status(200).json({
      success: true,
      data: exitData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { subjectname } = req.body;

    const Dataupdate = {
      subjectname,
    };

    const existingData = await SubjectModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await SubjectModule.findByIdAndUpdate(id, Dataupdate, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedData,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
};

export const DeleteSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const existData = await SubjectModule.findById(id);

    if (!existData) {
      return res.status(404).json({ msg: "User Data not Find" });
    }

    await SubjectModule.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


/*********************
Board Class Pdf Api 
 *********************/
export const CreatePdf = async (req, res) => {
  try {
    const { subjectId } = req.body;
    const pdfname = req.file.filename;

    const PdfData = new PdfModule({
      subjectref: subjectId,
      pdfname,
    });

    await PdfData.save();
    res.status(200).json({ msg: "Data added successfully", data: PdfData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallPdf = async (req, res) => {
  try {
    const userData = await PdfModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetonePdf = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await PdfModule.findById(id);

    if (!exitData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    res.status(200).json({
      success: true,
      data: exitData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdatePdf = async (req, res) => {
  try {
    const { id } = req.params;
    const { pdfname } = req.body;

    const Dataupdate = {
      pdfname,
    };

      if (req.files && req.files.pdfname) {
      Dataupdate.pdfname = req.files.pdfname[0].filename;
    }

    const existingData = await PdfModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await PdfModule.findByIdAndUpdate(id, Dataupdate, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedData,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
};

export const DeletePdf = async (req, res) => {
  try {
    const id = req.params.id;
    const existData = await PdfModule.findById(id);

    if (!existData) {
      return res.status(404).json({ msg: "User Data not Find" });
    }

    await PdfModule.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


/*********************
 Practicepdf Api 
 *********************/
export const CreatePracticepdf = async (req, res) => {
  try {
    const { heading } = req.body;
    const practicepdf = req.file.filename;

    const PracticepdfData = new PracticePdf({
      heading,
      practicepdf,
    });

    await PracticepdfData.save();
    res
      .status(200)
      .json({ msg: "Data added successfully", data: PracticepdfData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallPracticepdf = async (req, res) => {
  try {
    const userData = await PracticePdf.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetonePracticepdf = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await PracticePdf.findById(id);

    if (!exitData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    // ✅ Add success: true and wrap data
    res.status(200).json({
      success: true,
      data: exitData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdatePracticepdf = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading } = req.body;

    const Dataupdate = {
      heading,
    };

    if (req.files && req.files.practicepdf) {
      Dataupdate.practicepdf = req.files.practicepdf[0].filename;
    }

    const existingData = await PracticePdf.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await PracticePdf.findByIdAndUpdate(id, Dataupdate, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedData,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
};

export const DeletePracticePdf = async (req, res) => {
  try {
    const id = req.params.id;
    const existData = await PracticePdf.findById(id);

    if (!existData) {
      return res.status(404).json({ msg: "User Data not Find" });
    }

    await PracticePdf.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*********************
 Entrance Exam Api 
 *********************/
export const CreateEntranceExam = async (req, res) => {
  try {
    const { heading, heading1, examname } = req.body;

    const EntranceExamData = new EntranceExam({
      heading,
      heading1,
      examname,
    });

    await EntranceExamData.save();
    res.status(200).json({ msg: "Data added successfully", data: EntranceExamData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallEntranceExam = async (req, res) => {
  try {
    const userData = await EntranceExam.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneEntranceExam = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await EntranceExam.findById(id);

    if (!exitData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    // ✅ Add success: true and wrap data
    res.status(200).json({
      success: true,
      data: exitData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdateEntranceExam = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1, examname } = req.body;

    const Dataupdate = {
      heading,
      heading1,
      examname,
    };

    const existingData = await EntranceExam.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await EntranceExam.findByIdAndUpdate(id, Dataupdate, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedData,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
};

export const DeleteEntranceExam = async (req, res) => {
  try {
    const id = req.params.id;
    const existData = await EntranceExam.findById(id);

    if (!existData) {
      return res.status(404).json({ msg: "User Data not Find" });
    }

    await EntranceExam.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*********************
Entrance Exam Subject Api 
 *********************/
export const CreateExamSubject = async (req, res) => {
  try {
    const { entranceexamId, subjectname } = req.body;

    const ExamSubjectData = new EntranceExamSubject({
      entranceexamref: entranceexamId,
      subjectname,
    });

    await ExamSubjectData.save();
    res.status(200).json({ msg: "Data added successfully", data: ExamSubjectData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallExamSubjectforWebsite = async (req, res) => {
  const entranceexamId = req.params.entranceexamId;
  try {
    const userData = entranceexamId
    ? await EntranceExamSubject.find({ entranceexamref: entranceexamId }) 
    : await EntranceExamSubject.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetallExamSubject = async (req, res) => {
  const entranceexamId = req.query.entranceexamId;
  try {
    const userData = entranceexamId
    ? await EntranceExamSubject.find({ entranceexamref: entranceexamId }) 
    : await EntranceExamSubject.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const GetoneExamSubject = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await EntranceExamSubject.findById(id);

    if (!exitData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    res.status(200).json({
      success: true,
      data: exitData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdateExamSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { subjectname } = req.body;

    const Dataupdate = {
      subjectname,
    };

    const existingData = await EntranceExamSubject.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await EntranceExamSubject.findByIdAndUpdate(id, Dataupdate, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedData,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
};

export const DeleteExamSubject = async (req, res) => {
  try {
    const id = req.params.id;
    const existData = await EntranceExamSubject.findById(id);

    if (!existData) {
      return res.status(404).json({ msg: "User Data not Find" });
    }

    await EntranceExamSubject.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


/*********************
Entrance Exam Pdf Api 
 *********************/
export const CreateExamPdf = async (req, res) => {
  try {
    const { entranceexamsubjectId } = req.body;
    const pdfname = req.file.filename;

    const ExamPdfData = new EntranceExamPdf({
      examsubjectref: entranceexamsubjectId,
      pdfname,
    });

    await ExamPdfData.save();
    res.status(200).json({ msg: "Data added successfully", data: ExamPdfData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallExamPdf = async (req, res) => {
  try {
    const userData = await EntranceExamPdf.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneExamPdf = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await EntranceExamPdf.findById(id);

    if (!exitData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    res.status(200).json({
      success: true,
      data: exitData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const UpdateExamPdf = async (req, res) => {
  try {
    const { id } = req.params;
    const { pdfname } = req.body;

    const Dataupdate = {
      pdfname,
    };

      if (req.files && req.files.pdfname) {
      Dataupdate.pdfname = req.files.pdfname[0].filename;
    }

    const existingData = await EntranceExamPdf.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await EntranceExamPdf.findByIdAndUpdate(id, Dataupdate, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: updatedData,
      msg: "User updated successfully",
    });
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ success: false, msg: "Internal Server Error", error });
  }
};

export const DeleteExamPdf = async (req, res) => {
  try {
    const id = req.params.id;
    const existData = await EntranceExamPdf.findById(id);

    if (!existData) {
      return res.status(404).json({ msg: "User Data not Find" });
    }

    await EntranceExamPdf.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
