const Campus = require("../model/campus");
const Building = require("../model/buildings");

// CAMPUS LIST CONTROLLER FUNCTION

const campusList = async (req, res) => {
  let campus;
  try {
    campus = await Campus.find().populate("buildings");
    console.log(campus);
    if (campus.length === 0) {
      return res.status(400).json({ message: "Campus List is Empty" });
    }
    return res.status(200).json(campus);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

// CAMPUS ADD CONTROLLER FUNCTION
const addCampus = async (req, res) => {
  const { name, status, buildings } = req.body;

  try {
    const campus = await Campus.create({
      name,
      status,
      buildings,
    });
    console.log(campus);
    return res.status(201).json(campus);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// CAMPUS UPDATE CONTROLLER FUNCTION
const updateCampus = async (req, res) => {
  let campus;
  const campusId = req.params.id;
  const update = req.body;
  console.log(campusId);
  try {
    const campusUpdate = await Campus.findByIdAndUpdate(campusId, update, {
      new: true,
    });
    console.log(campusUpdate);
    if (!campusUpdate) {
      return res.status(400).json({ message: "No results found to update" });
    }
    return res
      .status(200)
      .json({ message: "Updated Successfully", campusUpdate });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: "Something went wrong", error: error.message });
  }
};
// CAMPUS DELETE CONTROLLER FUNCTION
const deleteCampus = async (req, res) => {
  const campusId = req.params.id;
  let campus;
  try {
    campus = await Campus.findByIdAndDelete(campusId);
    console.log(campus);
    if (!campus) {
      return res
        .status(400)
        .json({ message: "Could not find the item to be deleted" });
    }
    await Building.deleteMany({campus:campusId})
    return res.status(200).json({ message: "Deleted Successfully", campus });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: "Something went wrong", error: error.message });
  }
};
module.exports = { campusList, addCampus, updateCampus, deleteCampus };
