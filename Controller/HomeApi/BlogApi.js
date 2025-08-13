import { BlogModule } from "../../Model/HomeModule/BlogModule.js";

/*********************************
Blog Api
 *********************************/
export const CreateBlog = async (req, res) => {
  try {
    const { heading, description, date, blogdetail, publish } = req.body;
        const blogimage = req.file.filename;

    const newData = new BlogModule({
      heading,
      description,
      date,
      blogimage,
      blogdetail,
      publish
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

export const GetallBlog = async (req, res) => {
  try {
    const userData = await BlogModule.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetoneBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const exitData = await BlogModule.findById(id);

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


export const UpdateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const {heading, heading1, description, blogdetail, date } = req.body;

    const Dataupdate = {
      heading,
      heading1,
      description,
      blogdetail,
      date
    };

        if (req.files && req.files.blogimage) {
      Dataupdate.blogimage = req.files.blogimage[0].filename;
    }

    const existingData = await BlogModule.findById(id);
    if (!existingData) {
      return res
        .status(404)
        .json({ success: false, msg: "User data not found" });
    }

    const updatedData = await BlogModule.findByIdAndUpdate(id, Dataupdate, {
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

export const DeleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const exitData = await BlogModule.findById(id);

    if (!exitData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await BlogModule.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted data successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const PublishBlog = async  (req, res) => {
  try {
    const  {publish} = req.body;

    const blog = await BlogModule.findByIdAndUpdate(
      req.params.id, {publish}, {new: true}
    );
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to Publish Status'});
  }
}