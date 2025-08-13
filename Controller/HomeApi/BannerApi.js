import { Banner, ChooseUs, FAQ, FirstStep, FooterModule, LevelUp, NoCount, QuestionPaper, StartPracticing, SuccessStory } from "../../Model/HomeModule/BannerModule.js";

/*********************************
Banner Api
 *********************************/
export const CreateBanner = async (req, res) => {
  try {
    const { heading, description } = req.body;
        const bannerimage1 = req.files["bannerimage1"]?.[0]?.filename;
    const bannerimage2 = req.files["bannerimage2"]?.[0]?.filename;

    const newData = new Banner({
      heading,
      description,
      bannerimage1,
      bannerimage2
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallBanner = async (req, res) => {
  try {
    const userData = await Banner.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneBanner = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await Banner.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1, description } = req.body;

    const Dataupdate = {
      heading,
      heading1,
      description,
    };

        if (req.files && req.files.bannerimage1) {
      Dataupdate.bannerimage1 = req.files.bannerimage1[0].filename;
    }
    if (req.files && req.files.bannerimage2) {
      Dataupdate.bannerimage2 = req.files.bannerimage2[0].filename;
    }

    const existingData = await Banner.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await Banner.findByIdAndUpdate(id, Dataupdate, {
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

export const DeleteBanner = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await Banner.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await Banner.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


/*********************************
Start Practicing Api
 *********************************/
export const CreateStartPracticing = async (req, res) => {
  try {
    const { para,  heading} = req.body;
        const startimage1 = req.files["startimage1"]?.[0]?.filename;
    const startimage2 = req.files["startimage2"]?.[0]?.filename;
        const startimage3 = req.files["startimage3"]?.[0]?.filename;

    const newData = new StartPracticing({
      para,
      heading,
      startimage1,
      startimage2,
      startimage3
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallStartPracticing = async (req, res) => {
  try {
    const userData = await StartPracticing.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneStartPracticing = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await StartPracticing.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateStartPracticing = async (req, res) => {
  try {
    const { id } = req.params;
    const {   heading, para1, heading1 } = req.body;

    const Dataupdate = {
      heading,
      para1,
       heading1
    };

        if (req.files && req.files.startimage1) {
      Dataupdate.startimage1 = req.files.startimage1[0].filename;
    }
    if (req.files && req.files.startimage2) {
      Dataupdate.startimage2 = req.files.startimage2[0].filename;
    }

      if (req.files && req.files.startimage3) {
      Dataupdate.startimage3 = req.files.startimage3[0].filename;
    }

    const existingData = await StartPracticing.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await StartPracticing.findByIdAndUpdate(id, Dataupdate, {
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

export const DeleteStartPracticing = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await StartPracticing.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await StartPracticing.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*********************************
NoCount Api
 *********************************/
export const CreateNoCount = async (req, res) => {
  try {
    const { countnumber, title } = req.body;

    const newData = new NoCount({
      countnumber,
      title,
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallNoCount = async (req, res) => {
  try {
    const userData = await NoCount.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneNoCount = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await NoCount.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateNoCount = async (req, res) => {
  try {
    const { id } = req.params;
    const { countnumber, title } = req.body;

    const Dataupdate = {
      countnumber,
      title,
    };

    const existingData = await NoCount.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await NoCount.findByIdAndUpdate(id, Dataupdate, {
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

export const DeleteNoCount = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await NoCount.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await NoCount.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*********************************
ChooseUs Api
 *********************************/
export const CreateChooseUs = async (req, res) => {
  try {
    const { heading, point } = req.body;

    const newData = new ChooseUs({
      heading,
      point,
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallChooseUs = async (req, res) => {
  try {
    const userData = await ChooseUs.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneChooseUs = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await ChooseUs.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateChooseUs = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1, point } = req.body;

    const Dataupdate = {
      heading,
      heading1,
      point,
    };

    const existingData = await ChooseUs.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await ChooseUs.findByIdAndUpdate(id, Dataupdate, {
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

export const DeleteChooseUs = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await ChooseUs.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await ChooseUs.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*********************************
Question Paper Api
 *********************************/
export const CreateQuestionPaper = async (req, res) => {
  try {
    const { heading, description } = req.body;
        const qustionpaperimage = req.file.filename;

    const newData = new QuestionPaper({
      heading,
      description,
      qustionpaperimage,
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallQuestionPaper = async (req, res) => {
  try {
    const userData = await QuestionPaper.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneQuestionPaper = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await QuestionPaper.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateQuestionPaper = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1, description } = req.body;

    const Dataupdate = {
      heading,
      heading1,
      description,
    };

        if (req.files && req.files.qustionpaperimage) {
      Dataupdate.qustionpaperimage = req.files.qustionpaperimage[0].filename;
    }


    const existingData = await QuestionPaper.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await QuestionPaper.findByIdAndUpdate(id, Dataupdate, {
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

/*********************************
LevelUp Api
 *********************************/
export const CreateLevelUp = async (req, res) => {
  try {
    const { heading, heading1 } = req.body;
        const levelupimage1 = req.files["levelupimage1"]?.[0]?.filename;
    const levelupimage2 = req.files["levelupimage2"]?.[0]?.filename;
     const logo = req.files["logo"]?.[0]?.filename;

    const newData = new LevelUp({
      heading,
      heading1,
      levelupimage1,
      levelupimage2,
      logo
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallLevelUp = async (req, res) => {
  try {
    const userData = await LevelUp.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneLevelUp = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await LevelUp.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateLevelUp = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1} = req.body;

    const Dataupdate = {
      heading,
      heading1
    };

        if (req.files && req.files.levelupimage1) {
      Dataupdate.levelupimage1 = req.files.levelupimage1[0].filename;
    }
    if (req.files && req.files.levelupimage2) {
      Dataupdate.levelupimage2 = req.files.levelupimage2[0].filename;
    }

        if (req.files && req.files.logo) {
      Dataupdate.logo = req.files.logo[0].filename;
    }

    const existingData = await LevelUp.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await LevelUp.findByIdAndUpdate(id, Dataupdate, {
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


/*********************************
FirstStep Api
 *********************************/
export const CreateFirstStep = async (req, res) => {
  try {
    const { heading, heading1, description, title } = req.body;
        const firststepimage = req.file.filename;

    const newData = new FirstStep({
      heading,
      heading1,
      description,
      title,
      firststepimage
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallFirstStep = async (req, res) => {
  try {
    const userData = await FirstStep.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneFirstStep = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await FirstStep.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateFirstStep = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1, description, title } = req.body;

    const Dataupdate = {
      heading,
      heading1,
      description,
      title
    };

        if (req.files && req.files.firststepimage) {
      Dataupdate.firststepimage = req.files.firststepimage[0].filename;
    }

    const existingData = await FirstStep.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await FirstStep.findByIdAndUpdate(id, Dataupdate, {
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

export const DeleteFirstStep = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await FirstStep.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await FirstStep.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*********************************
FAQ Api
 *********************************/
export const CreateFAQ = async (req, res) => {
  try {
    const { mainheading, heading1, heading2, description, title } = req.body;

    const newData = new FAQ({
      mainheading,
      heading1,
      heading2,
      description,
      title
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallFAQ = async (req, res) => {
  try {
    const userData = await FAQ.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneFAQ = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await FAQ.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateFAQ = async (req, res) => {
  try {
    const { id } = req.params;
    const { mainheading, heading1, subheading1, heading2, subheading2, description, title } = req.body;

    const Dataupdate = {
      mainheading,
      heading1,
      subheading1,
      heading2,
      subheading2,
      description,
      title
    };

    const existingData = await FAQ.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await FAQ.findByIdAndUpdate(id, Dataupdate, {
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

export const DeleteFAQ = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await FAQ.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await FAQ.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*********************************
SuccessStory Api
 *********************************/
export const CreateSuccessStory = async (req, res) => {
  try {
    const { heading } = req.body;
        const successstoryimage = req.file.filename;

    const newData = new SuccessStory({
      heading,
      successstoryimage,
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallSuccessStory = async (req, res) => {
  try {
    const userData = await SuccessStory.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneSuccessStory = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await SuccessStory.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateSuccessStory = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1 } = req.body;

    const Dataupdate = {
      heading,
      heading1
    };

        if (req.files && req.files.successstoryimage) {
      Dataupdate.successstoryimage = req.files.successstoryimage[0].filename;
    }

    const existingData = await SuccessStory.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await SuccessStory.findByIdAndUpdate(id, Dataupdate, {
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

export const DeleteSuccessStory = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await SuccessStory.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await SuccessStory.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};



/*********************************
Footer Api
 *********************************/
export const CreateFooter = async (req, res) => {
  try {
    const { description } = req.body;

    const newData = new FooterModule({
     description,
    });

    await newData.save();
    res.status(200).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    console.error("Error adding school info:", error);
    res
      .status(500)
      .json({ error: "Failed to add data", details: error.message });
  }
};

export const GetallFooter = async (req, res) => {
  try {
    const userData = await FooterModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneFooter = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await FooterModule.findById(id);

    if (!exitData) {
      return res.status(404).json({ success: false, msg: "User data not found" });
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


export const UpdateFooter = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const Dataupdate = {
      description,
    };

    const existingData = await FooterModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await FooterModule.findByIdAndUpdate(id, Dataupdate, {
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
