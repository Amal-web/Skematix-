const Campus = require("../model/campus");
const Building = require("../model/buildings");

// BUILDING LIST CONTROLLER FUNCTION

const buildingList = async (req, res) => {
  try {
    const buildings = await Building.find();
    if (buildings.length === 0) {
      return res.status(400).json({ message: "Buildings are empty" });
    }
    return res.status(200).json(buildings);
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: "Something went wrong", error: error.message });
  }
};
// BUILDING ADD CONTROLLER FUNCTION
const addBuilding = async (req, res) => {
  const { name, status, campus } = req.body;
  try {
    const existingCampus = await Campus.findById(campus);
    if (!existingCampus) {
      return res.status(400).json({ message: "Unable to find Campus" });
    }
    const newBuilding = await Building.create({
      name,
      status,
      campus,
    });
    existingCampus.buildings.push(newBuilding);
    existingCampus.save();
    return res
      .status(201)
      .json({ message: "New building added to the campus", newBuilding });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// BUILDING UPDATE CONTROLLER FUNCTION
const updateBuilding = async (req, res) => {
  const buildingId = req.params.id;
  try {
    const buildingUpdate = await Building.findByIdAndUpdate(
      buildingId,
      req.body,
      {
        new: true,
      }
    );
    if (!buildingUpdate) {
      return res.status(400).json({ message: "No results found to update" });
    }
    return res
      .status(200)
      .json({ message: "Updated Successfully", buildingUpdate });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// BUILDING DELETE CONTROLLER FUNCTION
const deleteBuilding = async (req, res) => {
  const buildingId = req.params.id;
  try {
    const building = await Building.findByIdAndDelete(buildingId).populate(
      "campus"
    );
    if (!building) {
      return res.status(404).json({ message: "No buildings to delete" });
    }
    await building.campus.buildings.pull(building);
    await building.campus.save();

    return res
      .status(200)
      .json({ message: "Building deleted successfully", building });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: "Something went wrong", error: error.message });
  }
};
module.exports = { buildingList, addBuilding, updateBuilding, deleteBuilding };
