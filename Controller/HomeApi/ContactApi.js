import { ContactForm, ContactModule } from "../../Model/HomeModule/ContactModule.js";

/***********************
  Contact Api  
************************/
export const CreateContact = async (req, res) => {
  try {
    const { heading, heading1, description, icon } = req.body;

    const newData = new ContactModule({
      heading,
      heading1,
      description,
      icon
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

export const GetallContact = async (req, res) => {
  try {
    const userData = await ContactModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneContact = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await ContactModule.findById(id);

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


export const UpdateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading,  heading1, description, icon } = req.body;

    const Dataupdate = {
      heading,
       heading1,
      description,
      icon
    };

    const existingData = await ContactModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await ContactModule.findByIdAndUpdate(id, Dataupdate, {
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

export const DeleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await ContactModule.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await ContactModule.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*************************
Contact Form Api 
***************************/ 

export const CreateContactForm = async (req, res) => {
  try {
    const { fname, email, category, number, msg } = req.body;

    const newData = new ContactForm({
      fname,
      email,
      category,
      number,
       msg
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

export const GetallContactForm = async (req, res) => {
  try {
    const userData = await ContactForm.find({isDeleted: false});
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const DeleteContactForm = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await ContactForm.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await ContactForm.findByIdAndUpdate(id, {isDeleted: true});
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
