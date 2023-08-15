const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["active", "inactive"],
      message: "Status must be active or inative",
    },
  },
  campus: {
    type: mongoose.Types.ObjectId,
    ref: "Campus",
    required: true,
  },
});

const Building = mongoose.model("Building", buildingSchema);
module.exports = Building;
