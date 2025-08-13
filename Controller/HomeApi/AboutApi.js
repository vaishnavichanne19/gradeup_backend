import { AboutModule } from "../../Model/HomeModule/AboutModule.js";

/*********************************
About Api
 *********************************/
export const CreateAbout = async (req, res) => {
  try {
    const { heading, description } = req.body;
        const aboutimage1 = req.files["aboutimage1"]?.[0]?.filename;
    const aboutimage2 = req.files["aboutimage2"]?.[0]?.filename;
    const aboutimage3 = req.files["aboutimage3"]?.[0]?.filename;

    const newData = new AboutModule({
      heading,
      description,
      aboutimage1,
      aboutimage2,
      aboutimage3
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

export const GetallAbout = async (req, res) => {
  try {
    const userData = await AboutModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneAbout = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await AboutModule.findById(id);

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


export const UpdateAbout = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1, description } = req.body;

    const Dataupdate = {
      heading,
      heading1,
      description,
    };

        if (req.files && req.files.aboutimage1) {
      Dataupdate.aboutimage1 = req.files.aboutimage1[0].filename;
    }
    if (req.files && req.files.aboutimage2) {
      Dataupdate.aboutimage2 = req.files.aboutimage2[0].filename;
    }
    if (req.files && req.files.aboutimage3) {
      Dataupdate.aboutimage3 = req.files.aboutimage3[0].filename;
    }

    const existingData = await AboutModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await AboutModule.findByIdAndUpdate(id, Dataupdate, {
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
