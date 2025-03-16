const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  launchDate: {
    type: Number,
    required: true,
  },
  target: {
    type: String,
  },
  customers: {
    type: Array,
    of: String,
    required: true,
  },
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

//connect launchesSchema with the "launches" collection ........."Launch" model name  converts to "launches" collection in DB
module.exports = mongoose.model("Launch", launchesSchema);
