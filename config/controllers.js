import Album_Data from "../db/user.schema.js";
import mongoose from "mongoose";
const getRoute = async (req, res) => {
  try {
    const data = await Album_Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
};

const postRoute = async (req, res) => {
  const data = req.body;
  //console.log(data);
  
  if (!data.imageUrl || !data.title || !data.description) {
    return res.json({ message: "please provide all the mantritory data" });
  }
  const user = new Album_Data(data);

  try {
    await user.save();
    res
      .status(201)
      .json({ seccess: true, message: "new photo card has been created in your album" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const patchRoute = async (req, res) => {
  const id = req.params.id;
  const new_data = req.body;
  

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "There is a none of data in this id ",
    });
  }

  if (!new_data.title && !new_data.description) {
    return res.json({
      success: false,
      message: "please update any one of the field",
    });
  }
  try {
    const updated = await Album_Data.findByIdAndUpdate({ _id: id }, new_data);

    res
      .status(200)
      .json({ success: true, message: "your current data is updated" });


  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
const deleteRoute = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "There is a none of data in this id ",
    });
  }
  try {
    const response = await Album_Data.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "deleted" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export { getRoute, postRoute, patchRoute, deleteRoute };
