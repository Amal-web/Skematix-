const mongoose = require("mongoose");

const campusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required:true,
    enum: {
      values: ["active", "inactive"],
      message: "Status must be active or inative",
    },
  },
  buildings: [{ type: mongoose.Types.ObjectId, ref: "Building" }],
});

const Campus = mongoose.model("Campus", campusSchema);


module.exports = Campus;
