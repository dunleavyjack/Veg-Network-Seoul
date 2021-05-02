const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const findSchema = new Schema(
  {
    name: { type: String, required: true },
    veg: { type: String, required: true },
    tag: { type: String, required: true },
    location: { type: String, required: true },
    finderID: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Find = mongoose.model("Find", findSchema);

module.exports = Find;
