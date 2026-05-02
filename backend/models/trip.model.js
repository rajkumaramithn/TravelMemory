const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: "",
    },

    tripName: {
      type: String,
      required: true,
    },

    tripType: {
      type: String,
      required: true,
    },

    shortDescription: {
      type: String,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);
