import { ServiceModule } from "../../Model/HomeModule/ServiceModule.js";


/*********************************
Service Api
 *********************************/
export const CreateService = async (req, res) => {
  try {
    const { heading, description } = req.body;
        const serviceimage = req.file.filename;

    const newData = new ServiceModule({
      heading,
      description,
      serviceimage
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

export const GetallService = async (req, res) => {
  try {
    const userData = await ServiceModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneService = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await ServiceModule.findById(id);

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


export const UpdateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, heading1, description } = req.body;

    const Dataupdate = {
      heading,
      heading1,
      description,
    };

        if (req.files && req.files.serviceimage) {
      Dataupdate.serviceimage = req.files.serviceimage[0].filename;
    }

    const existingData = await ServiceModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await ServiceModule.findByIdAndUpdate(id, Dataupdate, {
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
